using AxShockwaveFlashObjects;
using System.Dynamic;
using System.Security;
using System.Text;
using System.Text.Json;
using System.Windows.Forms;
using System.Xml.Linq;

namespace Veyra.Bridge;

public sealed class FlashHost : IDisposable
{
    private readonly string _swfPath;
    private readonly object _sync = new();
    private Thread? _thread;
    private FlashForm? _form;
    private Exception? _startupError;
    private readonly ManualResetEventSlim _started = new(false);

    public event EventHandler<object>? EventRaised;

    public bool Ready { get; private set; }
    public string Detail { get; private set; } = "Flash host has not been initialized.";

    public FlashHost(string swfPath)
    {
        _swfPath = swfPath;
    }

    public object? Attach(JsonElement parameters)
    {
        long parentHwnd = ReadInt64(parameters.GetProperty("parentHwnd"));
        int x = parameters.GetProperty("x").GetInt32();
        int y = parameters.GetProperty("y").GetInt32();
        int screenX = parameters.TryGetProperty("screenX", out JsonElement screenXElement) ? screenXElement.GetInt32() : x;
        int screenY = parameters.TryGetProperty("screenY", out JsonElement screenYElement) ? screenYElement.GetInt32() : y;
        int width = parameters.GetProperty("width").GetInt32();
        int height = parameters.GetProperty("height").GetInt32();
        string mode = parameters.TryGetProperty("mode", out JsonElement modeElement)
            ? modeElement.GetString() ?? "child"
            : "child";

        EnsureStarted();
        return Invoke(() =>
        {
            RequireForm().AttachToParent(new IntPtr(parentHwnd), x, y, screenX, screenY, width, height, mode);
            Detail = "Client embedded in Veyra.";
            Raise(new { type = "game.lifecycle", state = "attached", detail = Detail });
            return new { attached = true, detail = Detail };
        });
    }

    public object? LoadClient()
    {
        EnsureStarted();
        if (_startupError is not null)
            throw new InvalidOperationException(_startupError.Message, _startupError);

        return Invoke(() =>
        {
            if (_form is null)
                throw new InvalidOperationException("Flash form did not initialize.");

            _form.LoadClient();
            Ready = false;
            Detail = "Client load requested.";
            Raise(new { type = "game.lifecycle", state = "loading", detail = Detail });
            return new { ready = Ready, detail = Detail };
        });
    }

    public object? Focus()
    {
        EnsureStarted();
        return Invoke(() =>
        {
            _form?.Show();
            _form?.Activate();
            return new { focused = _form is not null, detail = Detail };
        });
    }

    public object? Shutdown()
    {
        if (_form is null)
            return new { ready = false, detail = "No client session is running." };

        Invoke(() =>
        {
            _form.Close();
            return true;
        });
        Ready = false;
        Detail = "Bridge shut down the current client session.";
        Raise(new { type = "game.lifecycle", state = "closed", detail = Detail });
        return new { ready = Ready, detail = Detail };
    }

    public object? Call(JsonElement parameters)
    {
        string functionName = parameters.GetProperty("functionName").GetString()
            ?? throw new ArgumentException("Missing functionName.");
        object?[] args = ReadArgs(parameters);
        return Invoke(() => RequireForm().Call(functionName, args));
    }

    public object? GetGameObject(JsonElement parameters)
    {
        string path = parameters.GetProperty("path").GetString() ?? throw new ArgumentException("Missing path.");
        if (path.Contains('['))
        {
            string key = path.Split('"', '[', ']').Last(part => !string.IsNullOrWhiteSpace(part));
            string finalPath = path.Split('[')[0];
            return ParseGameJson(Invoke(() => RequireForm().Call("getGameObjectKey", finalPath, key)));
        }

        return ParseGameJson(Invoke(() => RequireForm().Call("getGameObject", path)));
    }

    public object? SetGameObject(JsonElement parameters)
    {
        string path = parameters.GetProperty("path").GetString() ?? throw new ArgumentException("Missing path.");
        object? value = FromJson(parameters.GetProperty("value"));
        if (path.Contains('['))
        {
            string key = path.Split('"', '[', ']').Last(part => !string.IsNullOrWhiteSpace(part));
            string finalPath = path.Split('[')[0];
            return Invoke(() => RequireForm().Call("setGameObjectKey", finalPath, key, value));
        }

        return Invoke(() => RequireForm().Call("setGameObject", path, value));
    }

    public object? CallGameFunction(JsonElement parameters)
    {
        string path = parameters.GetProperty("path").GetString() ?? throw new ArgumentException("Missing path.");
        object?[] args = ReadArgs(parameters);
        return args.Length > 0
            ? ParseGameJson(Invoke(() => RequireForm().Call("callGameFunction", new object?[] { path }.Concat(args).ToArray())))
            : ParseGameJson(Invoke(() => RequireForm().Call("callGameFunction0", path)));
    }

    public void Dispose()
    {
        try
        {
            Shutdown();
        }
        catch
        {
            // Best-effort cleanup.
        }
        _started.Dispose();
    }

    private void EnsureStarted()
    {
        lock (_sync)
        {
            if (_thread is not null)
                return;

            _thread = new Thread(RunStaThread)
            {
                Name = "Veyra Flash STA",
                IsBackground = true
            };
            _thread.SetApartmentState(ApartmentState.STA);
            _thread.Start();
        }

        _started.Wait(TimeSpan.FromSeconds(15));
        if (_startupError is not null)
        {
            Detail = _startupError.Message;
            Raise(new { type = "game.lifecycle", state = "error", detail = Detail });
        }
    }

    private void RunStaThread()
    {
        try
        {
            Application.EnableVisualStyles();
            Application.SetCompatibleTextRenderingDefault(false);
            if (!File.Exists(_swfPath))
                throw new FileNotFoundException($"Client SWF was not found. Place it at '{_swfPath}'.", _swfPath);

            FlashForm form = new(_swfPath);
            form.ExternalCall += (_, payload) =>
            {
                if (payload.FunctionName == "pre-load")
                {
                    Ready = false;
                    Detail = "Game client is loading.";
                    Raise(new { type = "game.lifecycle", state = "loading", detail = Detail });
                }
                else if (payload.FunctionName == "loaded")
                {
                    Ready = true;
                    Detail = "Game client loaded.";
                    Raise(new { type = "game.lifecycle", state = "loaded", detail = Detail });
                }

                Raise(payload);
            };
            form.FormClosed += (_, _) =>
            {
                Ready = false;
                _form = null;
                Detail = "Client window closed.";
            };
            _form = form;
            Detail = "Flash host initialized.";
            _started.Set();
            Application.Run(new ApplicationContext(form));
        }
        catch (Exception ex)
        {
            _startupError = ex;
            _started.Set();
        }
    }

    private FlashForm RequireForm()
    {
        EnsureStarted();
        if (_startupError is not null)
            throw new InvalidOperationException(_startupError.Message, _startupError);
        return _form ?? throw new InvalidOperationException("Flash host is not running.");
    }

    private T Invoke<T>(Func<T> action)
    {
        FlashForm form = RequireForm();
        if (form.InvokeRequired)
            return (T)form.Invoke(action);
        return action();
    }

    private static object?[] ReadArgs(JsonElement parameters)
    {
        if (!parameters.TryGetProperty("args", out JsonElement args) || args.ValueKind != JsonValueKind.Array)
            return Array.Empty<object?>();

        return args.EnumerateArray().Select(FromJson).ToArray();
    }

    private static object? FromJson(JsonElement value)
    {
        return value.ValueKind switch
        {
            JsonValueKind.String => value.GetString(),
            JsonValueKind.Number => value.TryGetInt32(out int intValue) ? intValue : value.GetDouble(),
            JsonValueKind.True => true,
            JsonValueKind.False => false,
            JsonValueKind.Null => null,
            JsonValueKind.Array => value.EnumerateArray().Select(FromJson).ToArray(),
            JsonValueKind.Object => value.EnumerateObject().ToDictionary(prop => prop.Name, prop => FromJson(prop.Value)),
            _ => null
        };
    }

    private static object? ParseGameJson(object? value)
    {
        if (value is not string text || string.IsNullOrWhiteSpace(text))
            return value;

        try
        {
            using JsonDocument document = JsonDocument.Parse(text);
            return document.RootElement.Clone();
        }
        catch (JsonException)
        {
            return value;
        }
    }

    private void Raise(object payload)
    {
        EventRaised?.Invoke(this, payload);
    }

    private static long ReadInt64(JsonElement value)
    {
        if (value.ValueKind == JsonValueKind.String && long.TryParse(value.GetString(), out long stringValue))
            return stringValue;
        return value.GetInt64();
    }
}

internal sealed record FlashExternalCall(string Type, string FunctionName, object?[] Args);

internal sealed class FlashForm : Form
{
    private readonly AxShockwaveFlash _flash = new();
    private readonly System.Windows.Forms.Timer _ownerTrackingTimer = new() { Interval = 16 };
    private NativeMethods.WinEventProc? _ownerMoveHookProc;
    private IntPtr _ownerMoveHook = IntPtr.Zero;
    private IntPtr _ownerWindow = IntPtr.Zero;
    private int _ownerOffsetX;
    private int _ownerOffsetY;
    private int _lastOverlayX = int.MinValue;
    private int _lastOverlayY = int.MinValue;
    private int _lastOverlayWidth = int.MinValue;
    private int _lastOverlayHeight = int.MinValue;

    public event EventHandler<FlashExternalCall>? ExternalCall;

    public FlashForm(string swfPath)
    {
        Text = "Veyra Client";
        Width = 958;
        Height = 550;
        StartPosition = FormStartPosition.CenterScreen;
        _ownerTrackingTimer.Tick += (_, _) => UpdateOwnedOverlayBounds();

        _flash.BeginInit();
        _flash.Name = "flash";
        _flash.Dock = DockStyle.Fill;
        _flash.TabIndex = 0;
        _flash.FlashCall += HandleFlashCall;
        Controls.Add(_flash);
        _flash.EndInit();

        byte[] swf = File.ReadAllBytes(swfPath);
        using MemoryStream stream = new();
        using BinaryWriter writer = new(stream);
        writer.Write(8 + swf.Length);
        writer.Write(1432769894);
        writer.Write(swf.Length);
        writer.Write(swf);
        writer.Seek(0, SeekOrigin.Begin);
        _flash.OcxState = new AxHost.State(stream, 1, false, null);
    }

    public void LoadClient()
    {
        Call("loadClient");
    }

    public void AttachToParent(IntPtr parent, int x, int y, int screenX, int screenY, int width, int height, string mode)
    {
        if (parent == IntPtr.Zero)
            return;

        ShowInTaskbar = false;
        FormBorderStyle = FormBorderStyle.None;
        int style = NativeMethods.GetWindowLong(Handle, NativeMethods.GWL_STYLE);
        style &= ~(NativeMethods.WS_CAPTION | NativeMethods.WS_THICKFRAME | NativeMethods.WS_SYSMENU | NativeMethods.WS_MINIMIZEBOX | NativeMethods.WS_MAXIMIZEBOX);

        if (mode == "owned-overlay")
        {
            NativeMethods.SetParent(Handle, IntPtr.Zero);
            style &= ~NativeMethods.WS_CHILD;
            style |= NativeMethods.WS_POPUP | NativeMethods.WS_VISIBLE;
            NativeMethods.SetWindowLong(Handle, NativeMethods.GWL_STYLE, style);
            NativeMethods.SetWindowLongPtr(Handle, NativeMethods.GWLP_HWNDPARENT, parent);
            Show();
            TrackOwnedOverlay(parent, x, y, screenX, screenY, width, height);
            return;
        }

        StopOwnedOverlayTracking();
        IntPtr childParent = NativeMethods.FindElectronContentWindow(parent);
        NativeMethods.SetParent(Handle, childParent);
        style |= NativeMethods.WS_CHILD | NativeMethods.WS_VISIBLE | NativeMethods.WS_CLIPSIBLINGS;
        NativeMethods.SetWindowLong(Handle, NativeMethods.GWL_STYLE, style);
        Show();
        NativeMethods.SetWindowPos(Handle, NativeMethods.HWND_TOP, x, y, Math.Max(1, width), Math.Max(1, height), NativeMethods.SWP_SHOWWINDOW);
    }

    private void TrackOwnedOverlay(IntPtr parent, int x, int y, int screenX, int screenY, int width, int height)
    {
        _ownerWindow = parent;
        _ownerOffsetX = x;
        _ownerOffsetY = y;
        SetOwnedOverlayBounds(screenX, screenY, width, height);
        EnsureOwnerMoveHook();
        _ownerTrackingTimer.Start();
    }

    private void StopOwnedOverlayTracking()
    {
        _ownerTrackingTimer.Stop();
        ReleaseOwnerMoveHook();
        _ownerWindow = IntPtr.Zero;
    }

    private void EnsureOwnerMoveHook()
    {
        if (_ownerMoveHook != IntPtr.Zero)
            return;

        _ownerMoveHookProc = (_, _, hWnd, idObject, _, _, _) =>
        {
            if (hWnd != _ownerWindow || idObject != NativeMethods.OBJID_WINDOW || IsDisposed)
                return;

            try
            {
                BeginInvoke(UpdateOwnedOverlayBounds);
            }
            catch
            {
                // The form can close while Windows is still dispatching a move event.
            }
        };
        _ownerMoveHook = NativeMethods.SetWinEventHook(
            NativeMethods.EVENT_OBJECT_LOCATIONCHANGE,
            NativeMethods.EVENT_OBJECT_LOCATIONCHANGE,
            IntPtr.Zero,
            _ownerMoveHookProc,
            0,
            0,
            NativeMethods.WINEVENT_OUTOFCONTEXT | NativeMethods.WINEVENT_SKIPOWNPROCESS);
    }

    private void ReleaseOwnerMoveHook()
    {
        if (_ownerMoveHook == IntPtr.Zero)
            return;

        NativeMethods.UnhookWinEvent(_ownerMoveHook);
        _ownerMoveHook = IntPtr.Zero;
        _ownerMoveHookProc = null;
    }

    private void UpdateOwnedOverlayBounds()
    {
        if (_ownerWindow == IntPtr.Zero || IsDisposed)
            return;

        NativeMethods.Point origin = new() { X = 0, Y = 0 };
        if (!NativeMethods.ClientToScreen(_ownerWindow, ref origin))
            return;
        if (!NativeMethods.GetClientRect(_ownerWindow, out NativeMethods.Rect client))
            return;

        int width = Math.Max(1, client.Right - client.Left - _ownerOffsetX);
        int height = Math.Max(1, client.Bottom - client.Top - _ownerOffsetY);
        SetOwnedOverlayBounds(origin.X + _ownerOffsetX, origin.Y + _ownerOffsetY, width, height);
    }

    private void SetOwnedOverlayBounds(int x, int y, int width, int height)
    {
        width = Math.Max(1, width);
        height = Math.Max(1, height);
        if (x == _lastOverlayX && y == _lastOverlayY && width == _lastOverlayWidth && height == _lastOverlayHeight)
            return;

        _lastOverlayX = x;
        _lastOverlayY = y;
        _lastOverlayWidth = width;
        _lastOverlayHeight = height;
        NativeMethods.SetWindowPos(Handle, NativeMethods.HWND_TOP, x, y, width, height, NativeMethods.SWP_SHOWWINDOW | NativeMethods.SWP_NOACTIVATE);
    }

    public object? Call(string function, params object?[] args)
    {
        StringBuilder request = new();
        request.Append($"<invoke name=\"{function}\" returntype=\"xml\">");
        if (args.Length > 0)
        {
            request.Append("<arguments>");
            foreach (object? arg in args)
                request.Append(ToFlashXml(arg));
            request.Append("</arguments>");
        }

        request.Append("</invoke>");
        string? result = _flash.CallFunction(request.ToString());
        if (string.IsNullOrWhiteSpace(result))
            return null;
        XElement element = XElement.Parse(result);
        return element.FirstNode is null ? null : FromFlashXml(element.Elements().FirstOrDefault() ?? element);
    }

    protected override void Dispose(bool disposing)
    {
        if (disposing)
        {
            _flash.FlashCall -= HandleFlashCall;
            try { _flash.Stop(); } catch { }
            _ownerTrackingTimer.Stop();
            _ownerTrackingTimer.Dispose();
            ReleaseOwnerMoveHook();
            _flash.Dispose();
        }

        base.Dispose(disposing);
    }

    private void HandleFlashCall(object? sender, _IShockwaveFlashEvents_FlashCallEvent e)
    {
        XElement element = XElement.Parse(e.request);
        string function = element.Attribute("name")?.Value ?? "unknown";
        object?[] args = element.Elements().Select(FromFlashXml).ToArray();
        ExternalCall?.Invoke(this, new FlashExternalCall("flash.externalCall", function, args));
    }

    private static string ToFlashXml(object? value)
    {
        return value switch
        {
            null => "<null/>",
            bool boolValue => boolValue ? "<true/>" : "<false/>",
            double or float or long or int or short or byte or decimal => $"<number>{value}</number>",
            IDictionary<string, object?> dict => ToFlashObjectXml(dict),
            object?[] array => ToFlashArrayXml(array),
            _ => $"<string>{SecurityElement.Escape(value.ToString())}</string>"
        };
    }

    private static string ToFlashObjectXml(IDictionary<string, object?> dict)
    {
        StringBuilder builder = new("<object>");
        foreach ((string key, object? value) in dict)
            builder.Append($"<property id=\"{SecurityElement.Escape(key)}\">{ToFlashXml(value)}</property>");
        return builder.Append("</object>").ToString();
    }

    private static string ToFlashArrayXml(IEnumerable<object?> values)
    {
        StringBuilder builder = new("<array>");
        int index = 0;
        foreach (object? value in values)
            builder.Append($"<property id=\"{index++}\">{ToFlashXml(value)}</property>");
        return builder.Append("</array>").ToString();
    }

    private static object? FromFlashXml(XElement element)
    {
        return element.Name.ToString() switch
        {
            "number" => int.TryParse(element.Value, out int intValue) ? intValue : double.TryParse(element.Value, out double doubleValue) ? doubleValue : 0,
            "true" => true,
            "false" => false,
            "null" => null,
            "array" => element.Elements().Select(property => FromFlashXml(property.Elements().First())).ToArray(),
            "object" => ToExpando(element),
            _ => element.Value
        };
    }

    private static ExpandoObject ToExpando(XElement element)
    {
        IDictionary<string, object?> result = new ExpandoObject();
        foreach (XElement property in element.Elements())
        {
            string key = property.Attribute("id")?.Value ?? string.Empty;
            result[key] = FromFlashXml(property.Elements().First());
        }

        return (ExpandoObject)result;
    }
}

internal static class NativeMethods
{
    public delegate bool EnumChildProc(IntPtr hWnd, IntPtr lParam);
    public delegate void WinEventProc(IntPtr hWinEventHook, uint eventType, IntPtr hWnd, int idObject, int idChild, uint dwEventThread, uint dwmsEventTime);

    public const int GWL_STYLE = -16;
    public const int GWLP_HWNDPARENT = -8;
    public const int WS_CHILD = 0x40000000;
    public const int WS_VISIBLE = 0x10000000;
    public const int WS_POPUP = unchecked((int)0x80000000);
    public const int WS_CLIPSIBLINGS = 0x04000000;
    public const int WS_CAPTION = 0x00C00000;
    public const int WS_THICKFRAME = 0x00040000;
    public const int WS_SYSMENU = 0x00080000;
    public const int WS_MINIMIZEBOX = 0x00020000;
    public const int WS_MAXIMIZEBOX = 0x00010000;
    public static readonly IntPtr HWND_TOP = IntPtr.Zero;
    public const uint SWP_SHOWWINDOW = 0x0040;
    public const uint SWP_NOACTIVATE = 0x0010;
    public const uint EVENT_OBJECT_LOCATIONCHANGE = 0x800B;
    public const int OBJID_WINDOW = 0;
    public const uint WINEVENT_OUTOFCONTEXT = 0x0000;
    public const uint WINEVENT_SKIPOWNPROCESS = 0x0002;

    public struct Point
    {
        public int X;
        public int Y;
    }

    public struct Rect
    {
        public int Left;
        public int Top;
        public int Right;
        public int Bottom;
    }

    [System.Runtime.InteropServices.DllImport("user32.dll")]
    public static extern IntPtr SetParent(IntPtr hWndChild, IntPtr hWndNewParent);

    [System.Runtime.InteropServices.DllImport("user32.dll")]
    public static extern bool EnumChildWindows(IntPtr hWndParent, EnumChildProc callback, IntPtr lParam);

    [System.Runtime.InteropServices.DllImport("user32.dll", CharSet = System.Runtime.InteropServices.CharSet.Unicode)]
    public static extern int GetClassName(IntPtr hWnd, StringBuilder className, int maxCount);

    [System.Runtime.InteropServices.DllImport("user32.dll")]
    public static extern int GetWindowLong(IntPtr hWnd, int nIndex);

    [System.Runtime.InteropServices.DllImport("user32.dll")]
    public static extern int SetWindowLong(IntPtr hWnd, int nIndex, int dwNewLong);

    [System.Runtime.InteropServices.DllImport("user32.dll", EntryPoint = "SetWindowLongPtrW")]
    public static extern IntPtr SetWindowLongPtr(IntPtr hWnd, int nIndex, IntPtr dwNewLong);

    [System.Runtime.InteropServices.DllImport("user32.dll", SetLastError = true)]
    public static extern bool MoveWindow(IntPtr hWnd, int x, int y, int width, int height, bool repaint);

    [System.Runtime.InteropServices.DllImport("user32.dll", SetLastError = true)]
    public static extern bool SetWindowPos(IntPtr hWnd, IntPtr hWndInsertAfter, int x, int y, int width, int height, uint flags);

    [System.Runtime.InteropServices.DllImport("user32.dll", SetLastError = true)]
    public static extern IntPtr SetWinEventHook(uint eventMin, uint eventMax, IntPtr hmodWinEventProc, WinEventProc lpfnWinEventProc, uint idProcess, uint idThread, uint dwFlags);

    [System.Runtime.InteropServices.DllImport("user32.dll", SetLastError = true)]
    public static extern bool UnhookWinEvent(IntPtr hWinEventHook);

    [System.Runtime.InteropServices.DllImport("user32.dll")]
    public static extern bool ClientToScreen(IntPtr hWnd, ref Point point);

    [System.Runtime.InteropServices.DllImport("user32.dll")]
    public static extern bool GetClientRect(IntPtr hWnd, out Rect rect);

    public static IntPtr FindElectronContentWindow(IntPtr topLevelWindow)
    {
        IntPtr preferred = IntPtr.Zero;
        IntPtr fallback = IntPtr.Zero;

        EnumChildWindows(topLevelWindow, (hWnd, _) =>
        {
            StringBuilder className = new(256);
            _ = GetClassName(hWnd, className, className.Capacity);
            string value = className.ToString();
            if (value == "Intermediate D3D Window")
            {
                preferred = hWnd;
                return false;
            }
            if (fallback == IntPtr.Zero && value == "Chrome_RenderWidgetHostHWND")
                fallback = hWnd;
            return true;
        }, IntPtr.Zero);

        if (preferred != IntPtr.Zero)
            return preferred;
        if (fallback != IntPtr.Zero)
            return fallback;
        return topLevelWindow;
    }
}
