# Veyra App

This is the official Veyra desktop app. It embeds the Veyra SWF directly inside Electron with Pepper Flash, then runs the TypeScript script runtime and builder against Flash `ExternalInterface`.

The renderer is served from a local `127.0.0.1` HTTPS server so Flash `ExternalInterface` can communicate with JavaScript.

## Requirements

- Electron 8.
- A PPAPI Pepper Flash plugin.
- `apps/flash-client/client.swf`.
- Flash local-trusted access for the local SWF and HTML folders.

Electron cannot use the installed `NPSWF*.dll` files from `C:\Windows\System32\Macromed\Flash` or `C:\Windows\SysWOW64\Macromed\Flash`. Those are NPAPI plugins.

Set these environment variables before launch if Pepper Flash is not auto-detected:

```powershell
$env:VEYRA_PEPPER_FLASH = "C:\path\to\pepflashplayer.dll"
$env:VEYRA_PEPPER_FLASH_VERSION = "34.0.0.330"
```

On macOS the plugin path must be a PPAPI `PepperFlashPlayer.plugin`, not an NPAPI browser plugin. Veyra checks Artix Game Launcher first, then common Chrome/Chromium PepperFlash folders. The Windows bridge is not used by this app on macOS.

Then run:

```powershell
pnpm app
```

The app writes a Flash trust file automatically:

```text
%APPDATA%\Macromedia\Flash Player\#Security\FlashPlayerTrust\veyra.cfg
```

## Test Script

The harness includes one direct test script:

- `HighLevelXP`
- Route: `icestormunder`
- Cell: `r2`
- Pad: `Top`
- Target: `*`

The shared rewrite package also exports the same script at `@veyra/scripts/farm/HighLevelXP`.
