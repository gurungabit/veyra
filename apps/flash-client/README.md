# Veyra App

This is the official Veyra desktop app. It embeds the Veyra SWF directly inside Electron with Pepper Flash, then runs the TypeScript script runtime and builder against Flash `ExternalInterface`. macOS and Windows use this same app path.

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

On macOS the plugin path must be a PPAPI `PepperFlashPlayer.plugin`, not an NPAPI browser plugin. Veyra checks Artix Game Launcher first, then common Chrome/Chromium PepperFlash folders.

To keep a local untracked copy in this repo, install Artix Game Launcher or set `VEYRA_PEPPER_FLASH`, then run:

```powershell
pnpm flash:bundle
```

This copies the plugin into ignored local storage at `apps/flash-client/vendor/pepper-flash/` so packaged releases can ship as one app download without committing Flash binaries.

For release builds that include everything in one download, bundle the platform plugin before packaging:

```powershell
# macOS package
$env:VEYRA_PEPPER_FLASH = "/path/to/PepperFlashPlayer.plugin"
pnpm flash:bundle

# Windows package
$env:VEYRA_PEPPER_FLASH = "C:\path\to\pepflashplayer.dll"
pnpm flash:bundle
```

Keep both platform plugins in `apps/flash-client/vendor/pepper-flash/` if you want to build macOS and Windows artifacts from one checkout.

## SWF

The shared Flash client source lives in `apps/flash-client/as3-client`. Rebuild `apps/flash-client/client.swf` after ActionScript changes:

```powershell
pnpm flash:build-swf
```

The build script uses `FLEX_HOME` when set, otherwise it checks `.toolchains/apache-flex-sdk-4.16.1-bin`.

## Release Builds

Release packaging uses Electron Builder and includes the app, compiled TypeScript, SWF, local HTTPS certificate, and bundled Pepper Flash plugin.

```powershell
# macOS .dmg + .zip, x64 Electron 8 app
pnpm app:dist:mac

# Windows NSIS installer + .zip, x64 Electron 8 app
pnpm app:dist:win
```

Artifacts are written to `apps/flash-client/release/`. `app:dist:win` should be run on Windows for the installer path unless your macOS builder has Wine/NSIS support available. `app:pack:mac` and `app:pack:win` create unpacked app folders for smoke testing.

By default packaging fails if the target platform's Pepper Flash plugin is not bundled. Set `VEYRA_ALLOW_EXTERNAL_FLASH=1` only for developer builds that intentionally rely on a locally installed plugin.

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
