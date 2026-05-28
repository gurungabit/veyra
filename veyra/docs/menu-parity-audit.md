# Veyra Menu Parity Audit

Source checked:
- `C:\Users\necro\Documents\aqwbot\Skua\Skua.Core\AppStartup\MainMenu.cs`
- `C:\Users\necro\Documents\aqwbot\Skua\Skua.WPF\UserControls\MainMenuUserControl.xaml`
- `C:\Users\necro\Documents\aqwbot\Skua\Skua.WPF\UserControls\AutoUserControl.xaml`
- `C:\Users\necro\Documents\aqwbot\Skua\Skua.WPF\UserControls\JumpUserControl.xaml`
- `C:\Users\necro\Documents\aqwbot\Skua\Skua.Core\Scripts\ScriptMap.cs`
- `C:\Users\necro\Documents\aqwbot\Skua\Skua.Core\AppStartup\Grabber.cs`
- `C:\Users\necro\Documents\aqwbot\Skua\Skua.Core\Services\GrabberService.cs`
- `C:\Users\necro\Documents\aqwbot\Skua\Skua.Core\ViewModels\LoaderViewModel.cs`
- `C:\Users\necro\Documents\aqwbot\Skua\Skua.Core\AppStartup\Options.cs`
- `C:\Users\necro\Documents\aqwbot\Skua\Skua.Core\Scripts\ScriptOption.cs`
- `C:\Users\necro\Documents\aqwbot\Skua\Skua.WPF\Views\GameOptionsView.xaml`

| Top item | Original contract | Veyra status |
| --- | --- | --- |
| Scripts | Opens a detached Load Script window | Implemented as compact detached loader; start/stop/load wired to TS runtime |
| Options > Game | Opens Game options | Implemented with the Skua-generated option list: 24 toggle chips, 3 text setters, 13 numeric setters, Reload Map, Relogin Server, Columns, Search, Reset, Default, and Save. Save persists to local storage and applies supported bridge-backed options live |
| Options > Application | Opens app settings | UI implemented; local settings placeholders documented in-window |
| Options > CoreBots | Opens shared core script settings | UI implemented; applies once converted core library reads settings |
| Options > Application Themes | Opens theme settings | Implemented; Veyra Dark, Classic Slate, High Contrast, and Blue Steel apply immediately to main and tool windows |
| Options > HotKeys | Opens hotkey settings | Implemented as a local shortcut map window |
| Helpers > Runtime | Opens runtime helper | Implemented; snapshot/debug actions wired |
| Helpers > Fast Travel | Opens fast travel | Implemented; map buttons call bridge join |
| Helpers > Current Drops | Opens current drops | Implemented; bridge object inspection wired |
| Tools > Loader | Opens quest/shop loader | Implemented; quest/shop ID load, loaded quest fetch, copy IDs, open, accept, fake-complete hooks wired |
| Tools > Grabber | Opens data grabber | Implemented; tabs for shop items, shop IDs, quests, inventory, house inventory, temp inventory, bank items, cell monsters, map monsters, and map items; bridge actions wired where safe |
| Tools > Junk Items | Opens junk item tool | Implemented with local add/remove/list persistence |
| Tools > Stats | Opens stats | Implemented through runtime snapshot |
| Tools > Console | Opens console | Implemented; `/snapshot`, `/join`, `/jump`, `/packet`, object path commands wired |
| Skills | Opens skills window | Implemented; skill use and local skill sets wired |
| Packets > Spammer | Opens packet spammer | Implemented; single-send, start spam, and stop spam wired |
| Packets > Logger | Opens packet logger | Implemented; starts packet capture |
| Packets > Interceptor | Opens interceptor | Implemented as packet capture plus saved local filter rule |
| Bank | Opens in-game bank | Implemented as direct bridge action |
| Logs | Opens logs window | Implemented; script/debug/packet/event logs wired |
| Plugins > View Plugins | Opens plugins window | Implemented with current plugin statuses |
| Auto | Compact popup with Auto Attack, Auto Hunt, Class, Mode, manual map IDs | Implemented as compact popup with DOM pickers; attack/hunt/stop wired, class/mode UI does not close popup |
| Jump | Compact popup with Cell, Pad, Current, Jump | Implemented as compact popup with DOM pickers; cells/pads read from current map and Jump calls bridge move |

Verification artifacts:
- `C:\Users\necro\Documents\aqwbot\veyra\artifacts\verification\11-brand-spacing.png`
- `C:\Users\necro\Documents\aqwbot\veyra\artifacts\verification\12-auto-custom-picker.png`
- `C:\Users\necro\Documents\aqwbot\veyra\artifacts\verification\13-jump-custom-picker.png`
- `C:\Users\necro\Documents\aqwbot\veyra\artifacts\verification\14-theme-high-contrast.png`
- `C:\Users\necro\Documents\aqwbot\veyra\artifacts\verification\15-loader-tool.png`
- `C:\Users\necro\Documents\aqwbot\veyra\artifacts\verification\16-grabber-tool.png`
- `C:\Users\necro\Documents\aqwbot\veyra\artifacts\verification\game-options-save-proof.png`
