package veyra.api {
import flash.events.MouseEvent;
import flash.text.TextField;
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
        return handleDrops("reject-except", whitelist, acceptAC, rejectExceptVisibleDrops(whitelist, acceptAC));
    }

    public static function acceptAllDrops():String {
        return handleDrops("accept-all", "", false);
    }

    public static function acceptDrops(whitelist:String):String {
        return handleDrops("accept-list", whitelist, false);
    }

    public static function rejectAllDrops(acceptAC:Boolean = false):String {
        return handleDrops("reject-all", "", acceptAC, rejectExceptVisibleDrops("", acceptAC));
    }

    public static function questDropsOnly(acceptAC:Boolean = false):String {
        var questDrops:Array = activeQuestDropWhitelist();
        return handleDrops("quest-only", "", acceptAC, questDropsOnlyVisibleDrops(acceptAC, questDrops), questDrops);
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

    private static function rejectExceptVisibleDrops(whitelist:String, acceptAC:Boolean = false):int {
        var pickup:Array = normalizeWhitelist(whitelist);
        var acted:int = 0;
        var seen:Array = [];
        if (Main.instance == null || Main.instance.game == null) {
            return acted;
        }

        var game:* = Main.instance.game;
        if (game.cDropsUI) {
            var source:* = game.cDropsUI.mcDraggable ? game.cDropsUI.mcDraggable.menu : game.cDropsUI;
            acted += rejectExceptDropSource(source, pickup, acceptAC, seen);
            acted += rejectExceptDropSource(game.cDropsUI, pickup, acceptAC, seen);
        }

        if (game.ui) {
            acted += rejectExceptDropSource(game.ui.dropStack, pickup, acceptAC, seen);
            acted += rejectExceptDropSource(game.ui.mcDropStack, pickup, acceptAC, seen);
        }

        return acted;
    }

    private static function questDropsOnlyVisibleDrops(acceptAC:Boolean = false, questDrops:Array = null):int {
        var acted:int = 0;
        var seen:Array = [];
        if (Main.instance == null || Main.instance.game == null) {
            return acted;
        }

        var game:* = Main.instance.game;
        if (game.cDropsUI) {
            var source:* = game.cDropsUI.mcDraggable ? game.cDropsUI.mcDraggable.menu : game.cDropsUI;
            acted += questDropsOnlyDropSource(source, acceptAC, seen, questDrops);
            acted += questDropsOnlyDropSource(game.cDropsUI, acceptAC, seen, questDrops);
        }

        if (game.ui) {
            acted += questDropsOnlyDropSource(game.ui.dropStack, acceptAC, seen, questDrops);
            acted += questDropsOnlyDropSource(game.ui.mcDropStack, acceptAC, seen, questDrops);
        }

        return acted;
    }

    private static function rejectExceptDropSource(source:*, pickup:Array, acceptAC:Boolean, seen:Array, depth:int = 0):int {
        var acted:int = 0;
        if (source == null || depth > 6 || seen.indexOf(source) >= 0) {
            return acted;
        }
        seen.push(source);

        var count:int = safeChildCount(source);
        for (var i:int = count - 1; i >= 0; i--) {
            var child:* = safeChildAt(source, i);
            if (child == null) {
                continue;
            }

            var rejected:Boolean = false;
            var item:* = dropItem(child);
            var label:String = "";
            if (item != null && item.sName != null) {
                label = cleanDropLabel(item.sName);
            }
            if (label.length == 0) {
                label = dropLabel(child);
            }
            if (label.length == 0 || !isDropFrameDisplay(child)) {
                acted += rejectExceptDropSource(child, pickup, acceptAC, seen, depth + 1);
                continue;
            }

            var drop:* = parseDrop(label);
            var id:int = dropId(item);
            var whitelisted:Boolean = dropMatchesWhitelist(drop.name, id, pickup);
            if (!whitelisted && !(acceptAC && isAcDrop(item))) {
                if (rejectDropTarget({
                    noButton: findNestedButton(child, ["btNo", "btnNo", "noBtn", "nbtn", "no", "reject"]),
                    display: child,
                    dropDisplay: true
                })) {
                    acted++;
                    rejected = true;
                }
            }

            if (!rejected) {
                acted += rejectExceptDropSource(child, pickup, acceptAC, seen, depth + 1);
            }
        }

        return acted;
    }

    private static function questDropsOnlyDropSource(source:*, acceptAC:Boolean, seen:Array, questDrops:Array = null, depth:int = 0):int {
        var acted:int = 0;
        if (source == null || depth > 6 || seen.indexOf(source) >= 0) {
            return acted;
        }
        seen.push(source);

        var count:int = safeChildCount(source);
        for (var i:int = count - 1; i >= 0; i--) {
            var child:* = safeChildAt(source, i);
            if (child == null) {
                continue;
            }

            var actedOnChild:Boolean = false;
            var item:* = dropItem(child);
            var label:String = "";
            if (item != null && item.sName != null) {
                label = cleanDropLabel(item.sName);
            }
            if (label.length == 0) {
                label = dropLabel(child);
            }
            if (label.length > 0 && isDropFrameDisplay(child)) {
                var drop:* = parseDrop(label);
                var id:int = dropId(item);
                if (isQuestDrop(item, child) || dropMatchesWhitelist(drop.name, id, questDrops) || (acceptAC && isAcDrop(item))) {
                    if (clickDropButton(findNestedButton(child, ["ybtn", "btYes", "btnYes", "yesBtn", "yes", "accept"]))) {
                        acted++;
                        actedOnChild = true;
                    }
                } else if (rejectDropTarget({
                    noButton: findNestedButton(child, ["btNo", "btnNo", "noBtn", "nbtn", "no", "reject"]),
                    display: child,
                    dropDisplay: true
                })) {
                    acted++;
                    actedOnChild = true;
                }
            }

            if (!actedOnChild) {
                acted += questDropsOnlyDropSource(child, acceptAC, seen, questDrops, depth + 1);
            }
        }

        return acted;
    }

    private static function handleDrops(mode:String, whitelist:String = "", acceptAC:Boolean = false, initialActed:int = 0, questDrops:Array = null):String {
        var targets:Array = scanDropTargets();
        var pickup:Array = normalizeWhitelist(whitelist);
        var acted:int = initialActed;

        for each (var target:* in targets) {
            var shouldAccept:Boolean = false;
            var shouldReject:Boolean = false;

            if (mode == "accept-all") {
                shouldAccept = true;
            } else if (mode == "accept-list") {
                shouldAccept = dropMatchesWhitelist(target.name, int(target.id), pickup);
            } else if (mode == "accept-ac") {
                shouldAccept = target.ac == true;
            } else if (mode == "reject-all") {
                shouldAccept = acceptAC && target.ac == true;
                shouldReject = !shouldAccept;
            } else if (mode == "reject-except") {
                shouldAccept = dropMatchesWhitelist(target.name, int(target.id), pickup) || (acceptAC && target.ac == true);
                shouldReject = !shouldAccept;
            } else if (mode == "quest-only") {
                shouldAccept = target.quest == true || dropMatchesWhitelist(target.name, int(target.id), questDrops) || (acceptAC && target.ac == true);
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
        var seen:Array = [];
        if (Main.instance == null || Main.instance.game == null) {
            return results;
        }

        var game:* = Main.instance.game;
        if (game.cDropsUI) {
            var source:* = game.cDropsUI.mcDraggable ? game.cDropsUI.mcDraggable.menu : game.cDropsUI;
            scanDropSource(source, results, seen);
            scanDropSource(game.cDropsUI, results, seen);
        }

        if (game.ui) {
            scanDropSource(game.ui.dropStack, results, seen);
            scanDropSource(game.ui.mcDropStack, results, seen);
        }

        return results;
    }

    private static function scanDropSource(source:*, results:Array, seen:Array, depth:int = 0):void {
        if (source == null || depth > 6) {
            return;
        }
        var count:int = safeChildCount(source);
        for (var i:int = count - 1; i >= 0; i--) {
            var child:* = safeChildAt(source, i);
            if (child == null) {
                continue;
            }
            addDropTarget(child, results, seen);
            scanDropSource(child, results, seen, depth + 1);
        }
    }

    private static function addDropTarget(display:*, results:Array, seen:Array):void {
        if (display == null || seen.indexOf(display) >= 0) {
            return;
        }

        var item:* = dropItem(display);
        var label:String = "";
        if (item != null && item.sName != null) {
            label = cleanDropLabel(item.sName);
        }
        if (label.length == 0) {
            label = dropLabel(display);
        }
        if (label.length == 0) {
            return;
        }

        var yesButton:* = findNestedButton(display, ["ybtn", "btYes", "btnYes", "yesBtn", "yes", "accept"]);
        var noButton:* = findNestedButton(display, ["nbtn", "btNo", "btnNo", "noBtn", "no", "reject"]);
        if (!isDropFrameDisplay(display)) {
            return;
        }

        var drop:* = parseDrop(label);
        if (drop.name.length == 0) {
            return;
        }
        var category:String = dropCategory(item, display);

        seen.push(display);
        results.push({
            id: dropId(item),
            name: drop.name,
            displayName: drop.displayName,
            quantity: dropQuantity(item, drop.count),
            ac: isAcDrop(item),
            quest: isQuestDrop(item, display),
            type: category,
            yesButton: yesButton,
            noButton: noButton,
            display: display,
            dropDisplay: true
        });
    }

    private static function dropItem(source:*):* {
        if (source == null) {
            return null;
        }
        try {
            if (source.itemObj != null) return source.itemObj;
        } catch (itemError:Error) {
        }
        try {
            if (source.o != null) return source.o;
        } catch (oError:Error) {
        }
        try {
            if (source.objData != null) return source.objData;
        } catch (objDataError:Error) {
        }
        return null;
    }

    private static function dropQuantity(item:*, fallback:int):int {
        if (item == null) {
            return fallback;
        }
        try {
            if (item.iQty != null) return int(item.iQty);
        } catch (qtyError:Error) {
        }
        try {
            if (item.iQtyNow != null) return int(item.iQtyNow);
        } catch (qtyNowError:Error) {
        }
        return fallback;
    }

    private static function serializableDrop(target:*):* {
        return {
            id: target.id,
            name: target.name,
            displayName: target.displayName,
            quantity: target.quantity,
            ac: target.ac,
            quest: target.quest,
            type: target.type
        };
    }

    private static function activeQuestDropWhitelist():Array {
        var values:Array = [];
        if (Main.instance == null || Main.instance.game == null) {
            return values;
        }

        var game:* = Main.instance.game;
        try {
            addActiveQuestRecords(values, game.world.questTree, game);
        } catch (questTreeError:Error) {
        }
        try {
            addActiveQuestRecords(values, game.world.quests, game);
        } catch (worldQuestsError:Error) {
        }
        try {
            addActiveQuestRecords(values, game.world.myAvatar.quests, game);
        } catch (avatarQuestsError:Error) {
        }
        try {
            addActiveQuestRecords(values, game.world.myAvatar.objData.quests, game);
        } catch (objDataQuestsError:Error) {
        }
        return values;
    }

    private static function addActiveQuestRecords(values:Array, source:*, game:*):void {
        if (source == null) {
            return;
        }

        if (isActiveQuestRecord(source, game)) {
            addQuestRequirementValues(values, source);
        }

        if (source is Array) {
            for each (var entry:* in source) {
                if (isActiveQuestRecord(entry, game)) {
                    addQuestRequirementValues(values, entry);
                }
            }
            return;
        }

        for (var key:String in source) {
            try {
                entry = source[key];
                if (isActiveQuestRecord(entry, game)) {
                    addQuestRequirementValues(values, entry);
                }
            } catch (entryError:Error) {
            }
        }
    }

    private static function isActiveQuestRecord(record:*, game:*):Boolean {
        if (record == null) {
            return false;
        }

        var questId:int = intValue(firstProperty(record, ["QuestID", "ID", "id", "iID", "qid"]));
        if (questId > 0) {
            try {
                if (isTruthy(game.world.isQuestInProgress(questId))) {
                    return true;
                }
            } catch (progressError:Error) {
            }
        }

        var status:String = trimString(String(firstProperty(record, ["sStatus", "Status", "status"]) || "")).toLowerCase();
        if (status == "p" || status == "active" || status == "accepted" || status == "in progress") {
            return true;
        }

        return isTruthy(firstProperty(record, ["bAccepted", "Active", "active", "accepted", "isActive", "inProgress"]));
    }

    private static function addQuestRequirementValues(values:Array, quest:*):void {
        addRequirementList(values, firstProperty(quest, ["oItems", "items", "Requirements", "requirements", "reqs", "objectives", "turnin"]));
    }

    private static function addRequirementList(values:Array, requirements:*):void {
        if (requirements == null) {
            return;
        }

        if (requirements is Array) {
            for each (var requirement:* in requirements) {
                addRequirement(values, requirement);
            }
            return;
        }

        addRequirement(values, requirements);
        for (var key:String in requirements) {
            try {
                addRequirement(values, requirements[key]);
            } catch (requirementError:Error) {
            }
        }
    }

    private static function addRequirement(values:Array, requirement:*):void {
        if (requirement == null) {
            return;
        }
        addDropWhitelistValue(values, firstProperty(requirement, ["sName", "Name", "name", "strName"]));
        addDropWhitelistValue(values, firstProperty(requirement, ["ItemID", "id", "ID", "iID"]));
    }

    private static function addDropWhitelistValue(values:Array, value:*):void {
        var text:String = normalizeDropName(value);
        if (text.length > 0 && values.indexOf(text) < 0) {
            values.push(text);
        }
    }

    private static function dropMatchesWhitelist(name:*, id:int, whitelist:Array):Boolean {
        if (whitelist == null) {
            return false;
        }
        var normalized:String = normalizeDropName(name);
        if (normalized.length > 0 && whitelist.indexOf(normalized) >= 0) {
            return true;
        }
        return id > 0 && whitelist.indexOf(String(id)) >= 0;
    }

    private static function normalizeDropName(value:*):String {
        return trimString(String(value == null ? "" : value).toLowerCase().replace(/\s+x\s*\d+$/, ""));
    }

    private static function firstProperty(source:*, names:Array):* {
        if (source == null) {
            return null;
        }
        for each (var name:String in names) {
            try {
                if (source[name] != null) {
                    return source[name];
                }
            } catch (propertyError:Error) {
            }
        }
        return null;
    }

    private static function intValue(value:*):int {
        if (value == null) {
            return 0;
        }
        var parsed:Number = Number(value);
        if (isNaN(parsed)) {
            return 0;
        }
        return int(parsed);
    }

    private static function rejectDropTarget(target:*):Boolean {
        var clicked:Boolean = clickDropButton(target.noButton);
        if (target.display != null && target.display.parent != null && (target.dropDisplay == true || clicked)) {
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
        } catch (firstError:*) {
            try {
                button.dispatchEvent(new MouseEvent(MouseEvent.CLICK));
                return true;
            } catch (secondError:*) {
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

    private static function isDropFrameDisplay(source:*):Boolean {
        if (source == null) {
            return false;
        }

        if (hasDirectDropButton(source, ["ybtn", "btYes", "btnYes", "yesBtn", "yes", "accept"]) ||
            hasDirectDropButton(source, ["nbtn", "btNo", "btnNo", "noBtn", "no", "reject"])) {
            return true;
        }

        var type:String = "";
        try {
            type = getQualifiedClassName(source);
        } catch (typeError:Error) {
        }
        return type.indexOf("DFrame") >= 0;
    }

    private static function hasDirectDropButton(source:*, names:Array):Boolean {
        if (source == null) {
            return false;
        }

        for each (var name:String in names) {
            try {
                if (source[name] != null) {
                    return true;
                }
            } catch (directError:Error) {
            }
        }

        var containers:Array = ["cnt", "btns", "dual", "single", "buttons"];
        for each (var containerName:String in containers) {
            try {
                if (source[containerName] != null && source[containerName] !== source) {
                    for each (name in names) {
                        if (source[containerName][name] != null) {
                            return true;
                        }
                    }
                }
            } catch (containerError:Error) {
            }
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

        var containers:Array = ["cnt", "btns", "dual", "single", "buttons", "mc", "hit"];
        for each (var containerName:String in containers) {
            try {
                if (source[containerName] != null && source[containerName] !== source) {
                    var nestedButton:* = findNestedButton(source[containerName], names, depth + 1);
                    if (nestedButton != null) {
                        return nestedButton;
                    }
                }
            } catch (containerError:Error) {
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
        var label:String = "";
        try {
            if (source.cnt && source.cnt.strName && source.cnt.strName.text != null) {
                label = cleanDropLabel(source.cnt.strName.text);
                if (label.length > 0) return label;
            }
        } catch (cntError:Error) {
        }
        try {
            if (source.strName && source.strName.text != null) {
                label = cleanDropLabel(source.strName.text);
                if (label.length > 0) return label;
            }
        } catch (nameError:Error) {
        }
        try {
            if (source.txtName && source.txtName.text != null) {
                label = cleanDropLabel(source.txtName.text);
                if (label.length > 0) return label;
            }
        } catch (txtError:Error) {
        }
        return recursiveDropLabel(source);
    }

    private static function recursiveDropLabel(source:*, depth:int = 0):String {
        if (source == null || depth > 5) {
            return "";
        }

        var direct:String = "";
        try {
            if (source is TextField) {
                direct = cleanDropLabel(TextField(source).text);
                if (direct.length > 0) {
                    return direct;
                }
            }
        } catch (textFieldError:Error) {
        }
        try {
            if (source.text != null) {
                direct = cleanDropLabel(source.text);
                if (direct.length > 0) {
                    return direct;
                }
            }
        } catch (textError:Error) {
        }

        var preferred:Array = ["cnt", "mc", "item", "card", "detail", "info", "holder"];
        for each (var name:String in preferred) {
            try {
                if (source[name] != null && source[name] !== source) {
                    var nestedLabel:String = recursiveDropLabel(source[name], depth + 1);
                    if (nestedLabel.length > 0) {
                        return nestedLabel;
                    }
                }
            } catch (containerError:Error) {
            }
        }

        var count:int = safeChildCount(source);
        for (var i:int = 0; i < count; i++) {
            var childLabel:String = recursiveDropLabel(safeChildAt(source, i), depth + 1);
            if (childLabel.length > 0) {
                return childLabel;
            }
        }

        return "";
    }

    private static function cleanDropLabel(value:*):String {
        var text:String = trimString(String(value == null ? "" : value));
        if (text.length == 0 || isIgnoredDropText(text)) {
            return "";
        }
        return text;
    }

    private static function isIgnoredDropText(value:String):Boolean {
        var text:String = trimString(value.toLowerCase());
        if (text.length == 0) return true;
        if (text == "yes" || text == "no") return true;
        if (text == "resource" || text == "quest item" || text == "class" || text == "helm") return true;
        if (text == "weapon" || text == "armor" || text == "cape" || text == "pet" || text == "misc") return true;
        if (text.indexOf("keep this item") >= 0) return true;
        if (text.indexOf("quest complete") >= 0) return true;
        if (text.indexOf("rewards") >= 0) return true;
        if (text.indexOf("current quests") >= 0) return true;
        return false;
    }

    private static function dropCategory(item:*, display:*):String {
        var value:String = itemCategory(item);
        if (value.length > 0) {
            return value;
        }
        return displayCategory(display);
    }

    private static function itemCategory(item:*):String {
        if (item == null) {
            return "";
        }

        var value:String = "";
        try {
            if (item.sType != null) {
                value = trimString(String(item.sType));
                if (value.length > 0) return value;
            }
        } catch (typeError:Error) {
        }
        try {
            if (item.Type != null) {
                value = trimString(String(item.Type));
                if (value.length > 0) return value;
            }
        } catch (capTypeError:Error) {
        }
        try {
            if (item.sItemType != null) {
                value = trimString(String(item.sItemType));
                if (value.length > 0) return value;
            }
        } catch (itemTypeError:Error) {
        }
        try {
            if (item.sMeta != null) {
                value = trimString(String(item.sMeta));
                if (value.length > 0) return value;
            }
        } catch (metaError:Error) {
        }
        return "";
    }

    private static function displayCategory(source:*, depth:int = 0):String {
        if (source == null || depth > 5) {
            return "";
        }

        var text:String = "";
        try {
            if (source is TextField) {
                text = categoryFromText(TextField(source).text);
                if (text.length > 0) return text;
            }
        } catch (textFieldError:Error) {
        }
        try {
            if (source.text != null) {
                text = categoryFromText(source.text);
                if (text.length > 0) return text;
            }
        } catch (textError:Error) {
        }

        var count:int = safeChildCount(source);
        for (var i:int = 0; i < count; i++) {
            text = displayCategory(safeChildAt(source, i), depth + 1);
            if (text.length > 0) {
                return text;
            }
        }

        return "";
    }

    private static function categoryFromText(value:*):String {
        var text:String = trimString(String(value == null ? "" : value));
        var normalized:String = text.toLowerCase();
        if (normalized == "quest item") return "Quest Item";
        if (normalized == "resource") return "Resource";
        if (normalized == "class") return "Class";
        if (normalized == "helm") return "Helm";
        if (normalized == "weapon") return "Weapon";
        if (normalized == "armor") return "Armor";
        if (normalized == "cape") return "Cape";
        if (normalized == "pet") return "Pet";
        if (normalized == "misc") return "Misc";
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
        return isTruthy(item.bCoins) || isTruthy(item.Coins) || isTruthy(item.bAC) || String(item.sType).toLowerCase() == "ac";
    }

    private static function isQuestDrop(item:*, display:* = null):Boolean {
        var category:String = dropCategory(item, display).toLowerCase();
        return category == "quest item" || category == "quest" || category.indexOf("quest item") >= 0;
    }

    private static function isTruthy(value:*):Boolean {
        return value == true || value == 1 || String(value).toLowerCase() == "true" || String(value) == "1";
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
