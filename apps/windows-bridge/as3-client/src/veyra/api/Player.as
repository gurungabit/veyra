package veyra.api {
import flash.events.MouseEvent;
import flash.utils.getQualifiedClassName;

import veyra.Main;

public class Player {
    private static const DROP_PARSE_REGEX:RegExp = /(.*)\s+x\s*(\d*)/;

    public function Player() {
        super();
    }

    public static function walkTo(xPos:int, yPos:int, walkSpeed:int):void {
        walkSpeed = (walkSpeed == 8 ? Main.instance.game.world.WALKSPEED : walkSpeed);
        Main.instance.game.world.myAvatar.pMC.walkTo(xPos, yPos, walkSpeed);
        Main.instance.game.world.moveRequest({
            'mc': Main.instance.game.world.myAvatar.pMC,
            'tx': xPos,
            'ty': yPos,
            'sp': walkSpeed
        });
    }

    public static function untargetSelf():void {
        var target:* = Main.instance.game.world.myAvatar.target;
        if (target && target == Main.instance.game.world.myAvatar) {
            Main.instance.game.world.cancelTarget();
        }
    }

    public static function attackPlayer(name:String):String {
        var player:* = Main.instance.game.world.getAvatarByUserName(name.toLowerCase());
        if (player != null && player.pMC != null) {
            Main.instance.game.world.setTarget(player);
            Main.instance.game.world.approachTarget();
            return true.toString();
        }
        return false.toString();
    }

    public static function getAvatar(id:int):String {
        return JSON.stringify(Main.instance.game.world.avatars[id].objData);
    }

    public static function isLoggedIn():String {
        var game:* = Main.instance.getGame();
        return (game != null && game.sfc != null && game.sfc.isConnected).toString();
    }

    public static function isKicked():String {
        var game:* = Main.instance.getGame();
        return (game != null && game.mcLogin != null && game.mcLogin.warning.visible).toString();
    }

    public function equipLoadout(setName:String, changeColors:Boolean = false): void
    {
        if(!Main.instance.game.world.coolDown("equipLoadout") || setName == null || setName == "")
        {
            return;
        }
        Main.instance.game.sfc.sendXtMessage("zm","equipLoadout",["cmd",setName,!changeColors],"str",Main.instance.game.world.curRoom);
    }

    public function onNewSet() : void
    {
        var curItem:* = undefined;
        var itemsArray:Array = ["he","ba","ar","co","Weapon","pe","am","mi"];
        for each(curItem in itemsArray)
        {
            if(Main.instance.game.world.myAvatar.objData.eqp[curItem] != null)
            {
                Main.instance.game.world.myAvatar.loadMovieAtES(curItem,Main.instance.game.world.myAvatar.objData.eqp[curItem].sFile,Main.instance.game.world.myAvatar.objData.eqp[curItem].sLink);
            }
            else
            {
                Main.instance.game.world.myAvatar.unloadMovieAtES(curItem);
            }
        }
    }

    public static function getLoadouts():String {
        var loadouts:Object = Main.instance.game.world.objInfo["customs"].loadouts;
        return JSON.stringify(loadouts);
    }

    public static function Gender():String {
        return '"' + Main.instance.game.world.myAvatar.objData.strGender.toUpperCase() + '"';
    }

    private static function parseDrop(name:*):* {
        var ret:* = {};
        var raw:String = String(name == null ? "" : name);
        var lowercaseName:String = trimString(raw.toLowerCase());
        var displayName:String = trimString(raw.replace(/\s+x\s*\d*$/, ""));
        ret.name = lowercaseName;
        ret.displayName = displayName;
        ret.count = 1;
        var result:Object = DROP_PARSE_REGEX.exec(lowercaseName);
        if (result == null) {
            return ret;
        }
        ret.name = trimString(String(result[1]));
        ret.displayName = trimString(String(result[1]));
        ret.count = int(result[2]);
        return ret;
    }

    public static function rejectExcept(whitelist:String, acceptAC:Boolean = false):String {
        return handleDrops("reject-except", whitelist, acceptAC);
    }

    public static function acceptAllDrops():String {
        return handleDrops("accept-all", "", false);
    }

    public static function acceptDrops(whitelist:String):String {
        return handleDrops("accept-list", whitelist, false);
    }

    public static function rejectAllDrops(acceptAC:Boolean = false):String {
        return handleDrops("reject-all", "", acceptAC);
    }

    public static function acceptACDrops():String {
        return handleDrops("accept-ac", "", true);
    }

    public static function getCurrentDrops():String {
        var targets:Array = scanDropTargets();
        var drops:Array = [];
        for each (var target:* in targets) {
            drops.push(serializableDrop(target));
        }
        return JSON.stringify(drops);
    }

    private static function handleDrops(mode:String, whitelist:String = "", acceptAC:Boolean = false):String {
        var targets:Array = scanDropTargets();
        var pickup:Array = normalizeWhitelist(whitelist);
        var acted:int = 0;
        var seen:Array = [];

        for each (var target:* in targets) {
            var key:String = String(target.id) + "|" + String(target.name) + "|" + String(target.displayName);
            if (seen.indexOf(key) >= 0) {
                continue;
            }
            seen.push(key);

            var shouldAccept:Boolean = false;
            var shouldReject:Boolean = false;

            if (mode == "accept-all") {
                shouldAccept = true;
            } else if (mode == "accept-list") {
                shouldAccept = pickup.indexOf(target.name) >= 0 || pickup.indexOf(String(target.id)) >= 0;
            } else if (mode == "accept-ac") {
                shouldAccept = target.ac == true;
            } else if (mode == "reject-all") {
                shouldAccept = acceptAC && target.ac == true;
                shouldReject = !shouldAccept;
            } else if (mode == "reject-except") {
                shouldAccept = pickup.indexOf(target.name) >= 0 || pickup.indexOf(String(target.id)) >= 0 || (acceptAC && target.ac == true);
                shouldReject = !shouldAccept;
            }

            if (shouldAccept && clickDropButton(target.yesButton)) {
                acted++;
            } else if (shouldReject && rejectDropTarget(target)) {
                acted++;
            }
        }

        return JSON.stringify({
            mode: mode,
            count: targets.length,
            acted: acted
        });
    }

    private static function scanDropTargets():Array {
        var results:Array = [];
        if (Main.instance == null || Main.instance.game == null) {
            return results;
        }

        var game:* = Main.instance.game;
        if (game.cDropsUI) {
            var source:* = game.cDropsUI.mcDraggable ? game.cDropsUI.mcDraggable.menu : game.cDropsUI;
            scanCustomDropSource(source, results);
        }

        if (game.ui && game.ui.dropStack) {
            scanDefaultDropSource(game.ui.dropStack, results);
        }

        return results;
    }

    private static function scanCustomDropSource(source:*, results:Array):void {
        if (source == null) {
            return;
        }
        var count:int = safeChildCount(source);
        for (var i:int = count - 1; i >= 0; i--) {
            var child:* = safeChildAt(source, i);
            if (!child || !child.itemObj) {
                continue;
            }
            var item:* = child.itemObj;
            results.push({
                id: dropId(item),
                name: trimString(String(item.sName || "").toLowerCase()),
                displayName: String(item.sName || ""),
                quantity: int(item.iQty || item.iQtyNow || 1),
                ac: isAcDrop(item),
                yesButton: findNestedButton(child, ["btYes", "btnYes", "yesBtn", "ybtn", "yes", "accept"]),
                noButton: findNestedButton(child, ["btNo", "btnNo", "noBtn", "nbtn", "no", "reject"]),
                display: child
            });
        }
    }

    private static function scanDefaultDropSource(source:*, results:Array):void {
        var count:int = safeChildCount(source);
        for (var i:int = count - 1; i >= 0; i--) {
            var child:* = safeChildAt(source, i);
            if (child == null) {
                continue;
            }
            var type:String = getQualifiedClassName(child);
            var label:String = dropLabel(child);
            if (type.indexOf("DFrame2MC") == -1 && label.length == 0 && child.itemObj == null) {
                continue;
            }

            var item:* = child.itemObj || child.o || child.objData || {};
            if (label.length == 0 && item.sName != null) {
                label = String(item.sName);
            }
            if (label.length == 0) {
                continue;
            }

            var drop:* = parseDrop(label);
            results.push({
                id: dropId(item),
                name: drop.name,
                displayName: drop.displayName,
                quantity: drop.count,
                ac: isAcDrop(item),
                yesButton: findNestedButton(child, ["ybtn", "btYes", "btnYes", "yesBtn", "yes", "accept"]),
                noButton: findNestedButton(child, ["nbtn", "btNo", "btnNo", "noBtn", "no", "reject"]),
                display: child
            });
        }
    }

    private static function serializableDrop(target:*):* {
        return {
            id: target.id,
            name: target.name,
            displayName: target.displayName,
            quantity: target.quantity,
            ac: target.ac
        };
    }

    private static function rejectDropTarget(target:*):Boolean {
        var clicked:Boolean = clickDropButton(target.noButton);
        if (target.display != null && target.display.parent != null) {
            return removeDropDisplay(target.display) || clicked;
        }
        return clicked;
    }

    private static function clickDropButton(button:*):Boolean {
        if (button == null) {
            return false;
        }
        try {
            button.dispatchEvent(new MouseEvent(MouseEvent.MOUSE_DOWN, true, false));
            button.dispatchEvent(new MouseEvent(MouseEvent.MOUSE_UP, true, false));
            button.dispatchEvent(new MouseEvent(MouseEvent.CLICK, true, false));
            return true;
        } catch (firstError:Error) {
            try {
                button.dispatchEvent(new MouseEvent(MouseEvent.CLICK));
                return true;
            } catch (secondError:Error) {
            }
        }
        return false;
    }

    private static function removeDropDisplay(display:*):Boolean {
        if (display == null) {
            return false;
        }
        try {
            if (display.parent != null) {
                display.parent.removeChild(display);
                return true;
            }
        } catch (error:Error) {
        }
        return false;
    }

    private static function findNestedButton(source:*, names:Array, depth:int = 0):* {
        if (source == null || depth > 4) {
            return null;
        }

        for each (var name:String in names) {
            try {
                if (source[name] != null) {
                    return source[name];
                }
            } catch (directError:Error) {
            }
        }

        try {
            if (source.cnt != null) {
                var cntButton:* = findNestedButton(source.cnt, names, depth + 1);
                if (cntButton != null) {
                    return cntButton;
                }
            }
        } catch (cntError:Error) {
        }

        var count:int = safeChildCount(source);
        for (var i:int = 0; i < count; i++) {
            var found:* = findNestedButton(safeChildAt(source, i), names, depth + 1);
            if (found != null) {
                return found;
            }
        }

        return null;
    }

    private static function dropLabel(source:*):String {
        if (source == null) {
            return "";
        }
        try {
            if (source.cnt && source.cnt.strName && source.cnt.strName.text != null) {
                return trimString(String(source.cnt.strName.text));
            }
        } catch (cntError:Error) {
        }
        try {
            if (source.strName && source.strName.text != null) {
                return trimString(String(source.strName.text));
            }
        } catch (nameError:Error) {
        }
        try {
            if (source.txtName && source.txtName.text != null) {
                return trimString(String(source.txtName.text));
            }
        } catch (txtError:Error) {
        }
        return "";
    }

    private static function safeChildCount(source:*):int {
        try {
            if (source != null && source.numChildren != null) {
                return int(source.numChildren);
            }
        } catch (error:Error) {
        }
        return 0;
    }

    private static function safeChildAt(source:*, index:int):* {
        try {
            return source.getChildAt(index);
        } catch (error:Error) {
        }
        return null;
    }

    private static function dropId(item:*):int {
        if (item == null) {
            return 0;
        }
        if (item.ItemID != null) return int(item.ItemID);
        if (item.iID != null) return int(item.iID);
        if (item.id != null) return int(item.id);
        return 0;
    }

    private static function isAcDrop(item:*):Boolean {
        if (item == null) {
            return false;
        }
        return item.bCoins == true || item.Coins == true || item.bAC == true || item.sType == "AC";
    }

    private static function normalizeWhitelist(whitelist:String):Array {
        var raw:Array = String(whitelist || "").toLowerCase().split(",");
        var values:Array = [];
        for each (var entry:String in raw) {
            entry = entry.replace(/^\s+|\s+$/g, "");
            if (entry.length > 0 && values.indexOf(entry) < 0) {
                values.push(entry);
            }
        }
        return values;
    }

    private static function trimString(value:String):String {
        return value.replace(/^\s+|\s+$/g, "");
    }
}
}
