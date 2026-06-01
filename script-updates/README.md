# TypeScript Script Updates

Official script updates are normal TypeScript files. The repo publishes readable `.ts` source plus tiny package metadata, and installed Veyra builds transpile the TypeScript when the user installs a script update. These are not Script Builder JSON scripts.

## Add A New Script

1. Copy the template:

```sh
cp script-updates/examples/NewScript.template.ts script-updates/src/MyNewScript.ts
```

2. Edit the copied file:

- Keep `export const meta`.
- Keep `export async function main(bot, options)`.
- Use `options.signal` for waits/delays so Stop can cancel the script.
- Import app APIs with the `veyra:app/` alias when needed, for example `veyra:app/scripts/ZeroToHeroKits/ZeroToHeroRuntime.js`.

3. Register the script in `script-updates/packages.json`.

For a new standalone package:

```json
{
  "id": "my-new-script",
  "name": "My New Script",
  "scripts": [
    {
      "id": "other.my-new-script",
      "category": "Official",
      "map": "battleon",
      "entry": "script-updates/src/MyNewScript.ts"
    }
  ]
}
```

For another script inside an existing package, add only another item to that package's `scripts` array.

4. Build and check:

```sh
pnpm script-updates:typecheck
pnpm script-updates:build
pnpm typecheck
```

5. Commit script-only updates with a non-release message:

```sh
git add script-updates
git commit -m "chore(scripts): add my new script"
git push
```

Users can then install it from `Veyra -> Check For Script Updates`. If automatic script updates are enabled, Veyra checks on app launch and shows a confirmation when it installs updates.

## Versioning

`script-updates/packages.json` has one `channelVersion`. Bump it whenever you publish script updates. Individual packages can also set their own `version`, but most script-only pushes should use the shared channel version.

The build command writes:

- `script-updates/stable.json`
- one small generated package JSON per package, for example `script-updates/free-acs-2026.06.01.0.json`

The generated package JSON points to `.ts` files in `script-updates/src`; it does not contain bundled JavaScript.

## When An App Release Is Needed

Script-only updates work when the script uses APIs that already exist in the installed Veyra app. If a script needs a new bot method, runtime helper, Flash bridge change, or loader behavior, ship an app release first with `feat:` or `fix:`.
