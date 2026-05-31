package veyra.api {
import flash.display.DisplayObject;
import flash.display.FrameLabel;
import flash.events.TimerEvent;
import flash.utils.Timer;

import veyra.Main;

public class World {
    private static var _fxStore:Object = {};
    private static var _fxLastOpt:Boolean = false;
    private static const PAD_NAMES_REGEX:RegExp = /(Spawn|Center|Left|Right|Up|Down|Top|Bottom)/;

    public function World() {
        super();
    }

    private static function currentUsername():String {
        var game:* = Main.instance.game;
        var world:* = game.world;
        var username:String = "";
        try {
            username = String(game.sfc.myUserName);
        } catch (ex1:Error) {
        }
        if (!username || username == "null" || username == "undefined") {
            try {
                username = String(game.loginInfo.strUsername);
            } catch (ex2:Error) {
            }
        }
        if (!username || username == "null" || username == "undefined") {
            try {
                username = String(world.myAvatar.objData.strUsername);
            } catch (ex3:Error) {
            }
        }
        return username;
    }

    public static function joinMap(map:String, cell:String = "Enter", pad:String = "Spawn"):void {
        var game:* = Main.instance.game;
        var world:* = game.world;
        var room:int = int(world.curRoom);
        if (room <= 0) {
            room = 1;
        }

        var username:String = currentUsername();

        game.sfc.sendString("%xt%zm%cmd%" + room + "%tfer%" + username + "%" + map + "%" + cell + "%" + pad + "%");
    }

    public static function joinHouse(username:String = ""):void {
        var game:* = Main.instance.game;
        var world:* = game.world;
        var room:int = int(world.curRoom);
        if (room <= 0) {
            room = 1;
        }

        var target:String = username && username.length > 0 ? username : currentUsername();
        if (!target || target == "null" || target == "undefined") {
            return;
        }

        game.sfc.sendString("%xt%zm%house%" + room + "%" + target + "%");
    }

    public static function jumpCorrectRoom(cell:String, pad:String, autoCorrect:Boolean = true, clientOnly:Boolean = false):void {
        try {
            var world:* = Main.instance.game.world;
            
            if (!autoCorrect) {
                world.moveToCell(cell, pad, clientOnly);
            } else {
                var users:Array = world.areaUsers != null ? world.areaUsers.concat() : [];
                var ownIndex:int = users.indexOf(Main.instance.game.sfc.myUserName);
                if (ownIndex >= 0) {
                    users.splice(ownIndex, 1);
                }
                users.sort();
                if (users.length <= 1) {
                    world.moveToCell(cell, pad, clientOnly);
                } else {
                    var uoTree:* = world.uoTree;
                    var usersCell:String = world.strFrame;
                    var usersPad:String = "Left";
                    for (var i:int = 0; i < users.length; i++) {
                        var userObj:* = uoTree[users[i]];
                        if (userObj == null) {
                            continue;
                        }
                        usersCell = userObj.strFrame;
                        usersPad = userObj.strPad;
                        if (cell == usersCell && pad != usersPad)
                            break;
                    }
                    world.moveToCell(cell, usersPad, clientOnly);
                }

                var jumpTimer:Timer = new Timer(50, 1);
                jumpTimer.addEventListener(TimerEvent.TIMER, jumpTimerEvent);
                jumpTimer.start();

                function jumpTimerEvent(e:TimerEvent):void {
                    jumpCorrectPad(cell, clientOnly);
                    jumpTimer.stop();
                    jumpTimer.removeEventListener(TimerEvent.TIMER, jumpTimerEvent);
                }
            }
        } catch (ex:Error) {
            Main.instance.external.debug("World::jumpCorrectRoom failed " + ex.message);
        }
    }

    public static function jumpCorrectPad(cell:String, clientOnly:Boolean = false):void {
        var cellPad:String = 'Left';
        var padArr:Array = getCellPads();
        var world:* = Main.instance.game.world;
        if (padArr == null || padArr.length == 0) {
            return;
        }
        
        if (padArr.indexOf(cellPad) >= 0) {
            if (world.strPad === cellPad)
                return;
            world.moveToCell(cell, cellPad, clientOnly);
        } else {
            cellPad = padArr[0];
            if (world.strPad === cellPad)
                return;
            world.moveToCell(cell, cellPad, clientOnly);
        }
    }

    public static function getCellPads():Array {
        var cellPads:Array = [];
        var cellPadsCnt:int = Main.instance.game.world.map.numChildren;
        for (var i:int = 0; i < cellPadsCnt; ++i) {
            var child:DisplayObject = Main.instance.game.world.map.getChildAt(i);
            if (PAD_NAMES_REGEX.test(child.name)) {
                cellPads.push(child.name);
            }
        }
        return cellPads;
    }

    public static function getCells():String {
        var cells:Array = [];
        var world:* = Main.instance.game.world;
        try {
            for each (var label:FrameLabel in world.map.currentLabels) {
                if (label.name && cells.indexOf(label.name) < 0) {
                    cells.push(label.name);
                }
            }
        } catch (ex:Error) {
        }
        if (world.strFrame && cells.indexOf(world.strFrame) < 0) {
            cells.unshift(world.strFrame);
        }
        return JSON.stringify(cells);
    }

    public static function getPads():String {
        var pads:Array = getCellPads();
        var world:* = Main.instance.game.world;
        if (world.strPad && pads.indexOf(world.strPad) < 0) {
            pads.unshift(world.strPad);
        }
        return JSON.stringify(pads);
    }

    public static function getWorldSnapshot():String {
        var game:* = Main.instance.game;
        var world:* = game.world;
        var avatar:* = world.myAvatar;
        var objData:* = avatar ? avatar.objData : null;
        var dataLeaf:* = avatar ? avatar.dataLeaf : null;
        var equipped:* = objData && objData.eqp ? objData.eqp.ar : null;
        var mapLoading:Boolean = false;
        var mapLoaded:Boolean = true;
        try {
            mapLoading = Boolean(world.mapLoadInProgress);
            mapLoaded = !mapLoading && (game.mcConnDetail == null || game.mcConnDetail.stage == null);
        } catch (ex:Error) {
        }
        return JSON.stringify({
            loggedIn: Player.isLoggedIn() == "true",
            username: objData && objData.strUsername ? objData.strUsername : game.loginInfo.strUsername,
            level: dataLeaf && dataLeaf.intLevel ? dataLeaf.intLevel : 0,
            map: world.strMapName,
            cell: world.strFrame,
            pad: world.strPad,
            room: world.curRoom,
            x: avatar && avatar.pMC ? avatar.pMC.x : 0,
            y: avatar && avatar.pMC ? avatar.pMC.y : 0,
            mapLoading: mapLoading,
            mapLoaded: mapLoaded,
            alive: dataLeaf && dataLeaf.intHP > 0,
            currentClassName: objData && objData.strClassName ? objData.strClassName : (equipped ? equipped.sName : ""),
            currentClassPoints: objData && objData.iCP ? objData.iCP : 0,
            currentClassRank: objData && objData.iRank ? objData.iRank : 0
        });
    }

    public static function disableDeathAd(enable:Boolean):void {
        Main.instance.game.userPreference.data.bDeathAd = !enable;
    }

    public static function skipCutscenes():void {
        while (Main.instance.game.mcExtSWF.numChildren > 0) {
            Main.instance.game.mcExtSWF.removeChildAt(0);
        }
        Main.instance.game.showInterface();
    }

    public static function hidePlayers(enabled:Boolean):void {
        var world:* = Main.instance.game.world;
        var currentFrame:String = world.strFrame;
        
        for each (var avatar:* in world.avatars) {
            if (avatar != null && avatar.pnm != null && !avatar.isMyAvatar) {
                if (enabled) {
                    avatar.hideMC();
                } else if (avatar.strFrame == currentFrame) {
                    avatar.showMC();
                }
            }
        }
    }

    public static function disableFX(enabled:Boolean):void {
        if (!_fxLastOpt && enabled) {
            _fxStore = {};
        }
        _fxLastOpt = enabled;
        for each (var avatar:* in Main.instance.game.world.avatars) {
            if (enabled) {
                if (avatar.pMC.spFX != null) {
                    _fxStore[avatar.uid] = avatar.rootClass.spFX;
                }
                avatar.rootClass.spFX = null;
            } else {
                avatar.rootClass.spFX = _fxStore[avatar.uid];
            }
        }
    }

    public static function killLag(enable:Boolean):void {
        Main.instance.game.world.visible = !enable;
        
        if (Main.instance.customBGLagKiller) {
            Main.instance.customBGLagKiller.visible = enable;
        }
    }
}
}
