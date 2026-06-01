# Script Updates

Official script updates are authored as normal TypeScript files from `apps/flash-client/src/scripts`. The repo builds those files into JavaScript module packs before publishing, and Veyra imports the downloaded modules directly. These are not Script Builder JSON scripts, and the installed app does not compile TypeScript at runtime.

## Add A New Script

1. Copy the template:

```sh
cp script-updates/examples/NewScript.template.ts apps/flash-client/src/scripts/MyNewScript.ts
```

2. Edit the copied file:

- Keep `export const meta`.
- Keep `export async function main(bot, options)`.
- Use `options.signal` for waits/delays so Stop can cancel the script.
- Use normal relative imports from `apps/flash-client/src/scripts`. The script update build compiles those files into the published module pack.

3. Register the script in `script-updates/packages.json`.

Most official scripts use the shared package:

```json
{
  "id": "official-scripts",
  "name": "Official Scripts",
  "includeOfficialScripts": true
}
```

Top-level scripts also need an entry in `officialCoreScripts` inside `scripts/build-script-updates.mjs`. Generated story scripts are discovered from `apps/flash-client/src/scripts/Story/index.ts`.

4. Build and check:

```sh
pnpm script-updates:typecheck
pnpm script-updates:build
pnpm typecheck
```

5. Commit script-only updates with a non-release message:

```sh
git add apps/flash-client/src/scripts script-updates scripts/build-script-updates.mjs
git commit -m "chore(scripts): add my new script"
git push
```

Users can then install it from `Veyra -> Check For Script Updates`. On a fresh install, Veyra bootstraps the official script pack automatically because the app does not ship fallback script definitions.

## Versioning

`script-updates/packages.json` has one `channelVersion`. Bump it whenever you publish script updates. Individual packages can also set their own `version`, but most script-only pushes should use the shared channel version.

The build command writes:

- `script-updates/stable.json`
- one generated package JSON per package, for example `script-updates/official-scripts-2026.06.01.3.json`

The generated package JSON contains prebuilt JavaScript modules plus script metadata. Source TypeScript stays in `apps/flash-client/src/scripts` for development.

## When An App Release Is Needed

Script-only updates work for script files and script helper files under `apps/flash-client/src/scripts`. If a script needs a new bot method, renderer/main-process API, Flash bridge change, or loader behavior, ship an app release first with `feat:` or `fix:`.
