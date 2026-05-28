using Veyra.Bridge;

int port = ReadIntArg(args, "--port", 56731);
string token = ReadStringArg(args, "--token", Guid.NewGuid().ToString("N")) ?? Guid.NewGuid().ToString("N");
string swfPath = ReadStringArg(args, "--swf", Path.Combine(AppContext.BaseDirectory, "client.swf"))
    ?? Path.Combine(AppContext.BaseDirectory, "client.swf");

using BridgeServer server = new(port, token, new FlashHost(swfPath));
Console.WriteLine($"Veyra Bridge listening on http://127.0.0.1:{port}/");
Console.WriteLine($"Token: {token}");
Console.WriteLine($"Client asset: {swfPath}");
await server.RunAsync();

static int ReadIntArg(string[] args, string name, int fallback)
{
    string? value = ReadStringArg(args, name, null);
    return int.TryParse(value, out int parsed) ? parsed : fallback;
}

static string? ReadStringArg(string[] args, string name, string? fallback)
{
    int index = Array.IndexOf(args, name);
    if (index < 0 || index + 1 >= args.Length)
        return fallback;
    return args[index + 1];
}
