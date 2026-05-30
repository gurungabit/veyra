# Veyra

Veyra is a TypeScript-first desktop automation runtime with an Electron Flash client, a typed bot API, a script runtime, and script-builder tools.

## Workspace

- `apps/flash-client`: Official Electron app with the embedded Flash client and shared SWF asset.
- `apps/flash-client/as3-client`: ActionScript source for the shared Veyra SWF.
- `apps/desktop`: React desktop shell prototype.
- `packages/protocol`: shared JSON-RPC contracts.
- `packages/core`: bot API, settings, app paths, script catalog sync, logging.
- `packages/runtime`: script lifecycle, cancellation, loading, status.
- `packages/scripts`: TypeScript script library.
- `packages/script-tools`: manifest generation and migration helpers.

## Data Directory

The default Windows data directory is `%APPDATA%\Veyra`.

## Tooling

This repository expects Node.js and pnpm to be installed. Once available:

```powershell
pnpm install
pnpm typecheck
pnpm test
pnpm start
```
