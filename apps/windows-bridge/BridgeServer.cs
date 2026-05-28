using System.Net;
using System.Text;
using System.Text.Json;

namespace Veyra.Bridge;

public sealed class BridgeServer : IDisposable
{
    private readonly HttpListener _listener = new();
    private readonly string _token;
    private readonly FlashHost _flashHost;
    private readonly JsonSerializerOptions _jsonOptions = new()
    {
        PropertyNamingPolicy = JsonNamingPolicy.CamelCase,
        PropertyNameCaseInsensitive = true
    };

    public BridgeServer(int port, string token, FlashHost flashHost)
    {
        _token = token;
        _flashHost = flashHost;
        _listener.Prefixes.Add($"http://127.0.0.1:{port}/");
    }

    public async Task RunAsync(CancellationToken token = default)
    {
        _listener.Start();
        while (!token.IsCancellationRequested)
        {
            HttpListenerContext context = await _listener.GetContextAsync();
            _ = Task.Run(() => HandleAsync(context), token);
        }
    }

    private async Task HandleAsync(HttpListenerContext context)
    {
        try
        {
            if (context.Request.HttpMethod == "GET" && context.Request.Url?.AbsolutePath == "/events")
            {
                await HandleEventsAsync(context);
                return;
            }

            if (context.Request.HttpMethod != "POST")
            {
                context.Response.StatusCode = 405;
                context.Response.Close();
                return;
            }

            if (context.Request.Headers["x-veyra-token"] != _token)
            {
                context.Response.StatusCode = 401;
                context.Response.Close();
                return;
            }

            using StreamReader reader = new(context.Request.InputStream, context.Request.ContentEncoding);
            string body = await reader.ReadToEndAsync();
            RpcRequest? request = JsonSerializer.Deserialize<RpcRequest>(body, _jsonOptions);
            RpcResponse response = request is null
                ? RpcResponse.Fail(null, -32600, "Invalid request.")
                : await DispatchAsync(request);

            byte[] bytes = Encoding.UTF8.GetBytes(JsonSerializer.Serialize(response, _jsonOptions));
            context.Response.ContentType = "application/json";
            context.Response.ContentLength64 = bytes.Length;
            await context.Response.OutputStream.WriteAsync(bytes);
        }
        catch (Exception ex)
        {
            byte[] bytes = Encoding.UTF8.GetBytes(JsonSerializer.Serialize(RpcResponse.Fail(null, -32603, ex.Message), _jsonOptions));
            context.Response.StatusCode = 500;
            context.Response.ContentType = "application/json";
            await context.Response.OutputStream.WriteAsync(bytes);
        }
        finally
        {
            context.Response.Close();
        }
    }

    private async Task HandleEventsAsync(HttpListenerContext context)
    {
        if (context.Request.Headers["x-veyra-token"] != _token)
        {
            context.Response.StatusCode = 401;
            context.Response.Close();
            return;
        }

        context.Response.StatusCode = 200;
        context.Response.ContentType = "text/event-stream";
        context.Response.Headers.Add("Cache-Control", "no-cache");

        _flashHost.EventRaised += OnEventRaised;
        try
        {
            await WriteEventAsync(context, new { type = "bridge.log", level = "info", message = "Event stream connected." });
            while (context.Response.OutputStream.CanWrite)
            {
                await Task.Delay(TimeSpan.FromSeconds(15));
                await WriteEventAsync(context, new { type = "bridge.log", level = "debug", message = "heartbeat" });
            }
        }
        catch
        {
            // Client disconnected.
        }
        finally
        {
            _flashHost.EventRaised -= OnEventRaised;
            context.Response.Close();
        }

        async void OnEventRaised(object? sender, object payload)
        {
            try
            {
                await WriteEventAsync(context, payload);
            }
            catch
            {
                // Client disconnected; main loop will observe the closed stream.
            }
        }
    }

    private async Task WriteEventAsync(HttpListenerContext context, object payload)
    {
        string line = $"data: {JsonSerializer.Serialize(payload, _jsonOptions)}\n\n";
        byte[] bytes = Encoding.UTF8.GetBytes(line);
        await context.Response.OutputStream.WriteAsync(bytes);
        await context.Response.OutputStream.FlushAsync();
    }

    private Task<RpcResponse> DispatchAsync(RpcRequest request)
    {
        return request.Method switch
        {
            "bridge.health" => Task.FromResult(RpcResponse.Ok(request.Id, new
            {
                app = "Veyra Bridge",
                ready = _flashHost.Ready,
                platform = Environment.OSVersion.Platform.ToString(),
                detail = _flashHost.Detail
            })),
            "game.attach" => Respond(request, () => _flashHost.Attach(request.Params)),
            "game.loadClient" => Respond(request, () => _flashHost.LoadClient()),
            "game.focus" => Respond(request, () => _flashHost.Focus()),
            "game.shutdown" => Respond(request, () => _flashHost.Shutdown()),
            "flash.call" => Respond(request, () => _flashHost.Call(request.Params)),
            "flash.getGameObject" => Respond(request, () => _flashHost.GetGameObject(request.Params)),
            "flash.setGameObject" => Respond(request, () => _flashHost.SetGameObject(request.Params)),
            "flash.callGameFunction" => Respond(request, () => _flashHost.CallGameFunction(request.Params)),
            _ => Task.FromResult(RpcResponse.Fail(request.Id, -32601, $"Method not found: {request.Method}"))
        };
    }

    private static Task<RpcResponse> Respond(RpcRequest request, Func<object?> action)
    {
        try
        {
            return Task.FromResult(RpcResponse.Ok(request.Id, action()));
        }
        catch (Exception ex)
        {
            return Task.FromResult(RpcResponse.Fail(request.Id, -32603, ex.Message));
        }
    }

    public void Dispose()
    {
        _listener.Close();
        _flashHost.Dispose();
    }
}

public sealed record RpcRequest(string Jsonrpc, JsonElement Id, string Method, JsonElement Params);

public sealed record RpcResponse(string Jsonrpc, JsonElement? Id, object? Result, RpcError? Error)
{
    public static RpcResponse Ok(JsonElement id, object? result) => new("2.0", id, result, null);
    public static RpcResponse Fail(JsonElement? id, int code, string message) => new("2.0", id, null, new RpcError(code, message));
}

public sealed record RpcError(int Code, string Message);
