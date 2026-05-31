package veyra {
import flash.display.DisplayObject;
import flash.display.DisplayObjectContainer;
import flash.display.Loader;
import flash.display.LoaderInfo;
import flash.display.MovieClip;
import flash.display.Stage;
import flash.display.StageAlign;
import flash.display.StageScaleMode;
import flash.events.Event;
import flash.events.IOErrorEvent;
import flash.events.KeyboardEvent;
import flash.events.MouseEvent;
import flash.events.ProgressEvent;
import flash.events.SecurityErrorEvent;
import flash.events.TimerEvent;
import flash.events.UncaughtErrorEvent;
import flash.net.URLLoader;
import flash.net.URLRequest;
import flash.system.ApplicationDomain;
import flash.system.LoaderContext;
import flash.system.Security;
import flash.text.TextField;
import flash.text.TextFieldType;
import flash.utils.Timer;
import flash.utils.getTimer;
import flash.utils.getQualifiedClassName;

import veyra.api.Auras;
import veyra.module.ModalMC;
import veyra.module.Modules;
import veyra.util.SFSEvent;

[SWF(frameRate="30", backgroundColor="#000000", width="958", height="550")]
public class Main extends MovieClip {
    public static var instance:Main;
    private static var _gameClass:Class;
    private static var _handler:*;

    private var _game:*;
    public var external:Externalizer;
    private var sURL:String = 'https://game.aq.com/game/';
    private var versionUrl:String = (sURL + 'api/data/gameversion');
    private var loginURL:String = (sURL + 'api/login/now');
    private var useArtixLoader:Boolean = true;
    private var sFile:String;
    private var sBG:String = 'hideme.swf';
    private var isEU:Boolean;
    private var urlLoader:URLLoader;
    private var vars:Object;
    private var loader:Loader;
    private var gameAttached:Boolean = false;
    private var bridgeReady:Boolean = false;
    private var clientVisibleNotified:Boolean = false;
    private var resolveGameTimer:Timer;
    private var sTitle:String = '<font color="#FDAF2D">AURAS!!!</font>';
    private var stg:Stage;
    private var gameDomain:ApplicationDomain;
    private var customBGLoader:Loader;
    private var customBGReady:MovieClip = null;
    public var customBGLagKiller:MovieClip = null;
    private var customBackgroundURL:String;
    private var houseReplayKey:String = "";
    private var houseReplayAt:int = 0;
    private var pendingHouseMove:Object;

    public function Main() {
        String.prototype.trim = function():String {
            var s:String = String(this);
            return s.replace(/^\s+|\s+$/g, "");
        };

        Main.instance = this;

        if (stage) this.init();
        else addEventListener(Event.ADDED_TO_STAGE, this.init);
    }

    public static function loadGame():void {
        Main.instance.onAddedToStage();
        Main.instance.external.call('pre-load');
    }

    public static function setBackgroundValues(sBGValue:String, customBackground:String):void {
        if (sBGValue && sBGValue.length > 0) {
            instance.sBG = sBGValue;
            if (instance.game && instance.game.params) {
                instance.game.params.sBG = sBGValue;
            }
        }
        if (customBackground && customBackground.length > 0) {
            instance.customBackgroundURL = customBackground;
            instance.initCustomBackground();
        } else {
            instance.customBackgroundURL = null;
        }
    }

    public static function setLoginCredentials(username:String, password:String):String {
        if (!instance || !instance.game || !instance.game.mcLogin) return "false";
        return instance.setLoginCredentialsInternal(username, password).toString();
    }

    public static function login(username:String, password:String):String {
        if (!instance || !instance.game) return "false";
        setLoginCredentials(username, password);
        try {
            var loginFunction:Function = instance.game["login"] as Function;
            if (loginFunction != null) {
                loginFunction.apply(instance.game, [username, password]);
                return "true";
            }
        } catch (error:Error) {
            instance.external.debug("Main::login failed " + error.name + " " + error.message);
        }
        return "false";
    }

    public static function logout():String {
        if (!instance || !instance.game) return "false";
        try {
            if (instance.game.sfc && instance.game.sfc.isConnected) {
                instance.game.sfc.disconnect();
            }
            instance.game.gotoAndPlay("Login");
            return "true";
        } catch (error:Error) {
            instance.external.debug("Main::logout failed " + error.name + " " + error.message);
        }
        return "false";
    }

    private function init(e:Event = null):void {
        removeEventListener(Event.ADDED_TO_STAGE, this.init);
        this.external = new Externalizer();
        this.external.init(this);
    }

    private function setLoginCredentialsInternal(username:String, password:String):Boolean {
        var fields:Array = [];
        collectInputTextFields(this.game.mcLogin, fields);
        var usernameSet:Boolean = false;
        var passwordSet:Boolean = false;

        for each (var field:TextField in fields) {
            if (!passwordSet && field.displayAsPassword) {
                setTextFieldValue(field, password);
                passwordSet = true;
            } else if (!usernameSet && !field.displayAsPassword) {
                setTextFieldValue(field, username);
                usernameSet = true;
            }
        }

        return usernameSet || passwordSet;
    }

    private function collectInputTextFields(root:DisplayObject, fields:Array):void {
        if (root is TextField) {
            var field:TextField = root as TextField;
            if (field.type == TextFieldType.INPUT) fields.push(field);
        }

        if (!(root is DisplayObjectContainer)) return;
        var container:DisplayObjectContainer = root as DisplayObjectContainer;
        for (var index:int = 0; index < container.numChildren; index++) {
            collectInputTextFields(container.getChildAt(index), fields);
        }
    }

    private function setTextFieldValue(field:TextField, value:String):void {
        field.text = value == null ? "" : value;
        field.dispatchEvent(new Event(Event.CHANGE, true));
    }

    private function onAddedToStage():void {
        this.configureUrlsFromParameters();
        if (this.useArtixLoader) {
            this.external.debug("Main::onAddedToStage loading Artix Loader3 from " + this.sURL);
            Security.allowDomain('*');
            this.vars = {};
            this.sFile = "Loader3.swf?ver=a";
            this.loadGame();
            return;
        }

        this.external.debug("Main::onAddedToStage requesting " + this.versionUrl);
        Security.allowDomain('*');
        this.urlLoader = new URLLoader();
        this.urlLoader.addEventListener(Event.COMPLETE, this.onDataComplete);
        this.urlLoader.addEventListener(IOErrorEvent.IO_ERROR, this.onDataError);
        this.urlLoader.addEventListener(SecurityErrorEvent.SECURITY_ERROR, this.onDataError);
        this.urlLoader.load(new URLRequest(this.versionUrl));
    }

    private function configureUrlsFromParameters():void {
        if (root.loaderInfo.parameters.sURL && root.loaderInfo.parameters.sURL.length > 0) {
            this.sURL = root.loaderInfo.parameters.sURL;
            if (this.sURL.charAt(this.sURL.length - 1) != '/') {
                this.sURL += '/';
            }
            this.versionUrl = (this.sURL + 'api/data/gameversion');
            this.loginURL = (this.sURL + 'api/login/now');
        }
        if (root.loaderInfo.parameters.loaderMode && root.loaderInfo.parameters.loaderMode == "direct") {
            this.useArtixLoader = false;
        }
    }

    private function onDataComplete(event:Event):void {
        this.urlLoader.removeEventListener(Event.COMPLETE, this.onDataComplete);
        this.urlLoader.removeEventListener(IOErrorEvent.IO_ERROR, this.onDataError);
        this.urlLoader.removeEventListener(SecurityErrorEvent.SECURITY_ERROR, this.onDataError);
        this.external.debug("Main::onDataComplete " + event.target.data);
        this.vars = JSON.parse(event.target.data);
        this.sFile = ((this.vars.sFile + '?ver=') + Math.random());
        this.loadGame()
    }

    private function onDataError(event:Event):void {
        this.external.debug("Main::onDataError " + event.toString());
    }

    private function loadGame():void {
        this.external.debug("Main::loadGame " + this.sURL + 'gamefiles/' + this.sFile);
        this.loader = new Loader();
        this.gameAttached = false;
        this.loader.contentLoaderInfo.uncaughtErrorEvents.addEventListener(UncaughtErrorEvent.UNCAUGHT_ERROR, this.onGameUncaughtError);
        this.loader.contentLoaderInfo.addEventListener(Event.INIT, this.onGameInit);
        this.loader.contentLoaderInfo.addEventListener(Event.COMPLETE, this.onComplete);
        this.loader.contentLoaderInfo.addEventListener(IOErrorEvent.IO_ERROR, this.onGameLoadError);
        this.loader.contentLoaderInfo.addEventListener(SecurityErrorEvent.SECURITY_ERROR, this.onGameLoadError);
        this.loader.contentLoaderInfo.addEventListener(ProgressEvent.PROGRESS, this.onGameLoadProgress);
        this.loader.load(new URLRequest(this.sURL + 'gamefiles/' + this.sFile));
    }

    private function onComplete(event:Event):void {
        this.attachLoadedGame(event, "COMPLETE");
    }

    private function onGameInit(event:Event):void {
        this.attachLoadedGame(event, "INIT");
    }

    private function attachLoadedGame(event:Event, phase:String):void {
        if (this.gameAttached) {
            this.external.debug("Main::attachLoadedGame ignored duplicate " + phase);
            return;
        }
        this.gameAttached = true;
        this.loader.contentLoaderInfo.removeEventListener(Event.INIT, this.onGameInit);
        this.loader.contentLoaderInfo.uncaughtErrorEvents.removeEventListener(UncaughtErrorEvent.UNCAUGHT_ERROR, this.onGameUncaughtError);
        this.loader.contentLoaderInfo.removeEventListener(Event.COMPLETE, this.onComplete);
        this.loader.contentLoaderInfo.removeEventListener(IOErrorEvent.IO_ERROR, this.onGameLoadError);
        this.loader.contentLoaderInfo.removeEventListener(SecurityErrorEvent.SECURITY_ERROR, this.onGameLoadError);
        this.loader.contentLoaderInfo.removeEventListener(ProgressEvent.PROGRESS, this.onGameLoadProgress);
        this.external.debug("Main::attachLoadedGame phase " + phase + ".");

        try {
            this.stg = stage;
            this.external.debug("Main::onComplete stage children " + this.stg.numChildren);
            if (this.stg.numChildren > 0) {
                this.stg.removeChildAt(0);
            }
            this.game = this.stg.addChild(this.loader.content);
            this.stg.scaleMode = StageScaleMode.SHOW_ALL;
            this.stg.align = StageAlign.TOP;

            this.gameDomain = LoaderInfo(event.target).applicationDomain;
            if (this.isGameRoot(this.game)) {
                this.initializeGameBridge();
            } else {
                this.external.debug("Main::attachLoadedGame waiting for nested game root.");
                this.startGameResolver();
            }
        } catch (ex:Error) {
            this.external.debug("Main::onComplete error " + ex.name + " " + ex.message + " " + ex.getStackTrace());
        }
    }

    private function onGameLoadProgress(event:ProgressEvent):void {
        if (event.bytesTotal > 0 && event.bytesLoaded == event.bytesTotal) {
            this.external.debug("Main::onGameLoadProgress complete bytes " + event.bytesLoaded);
        }
    }

    private function onGameLoadError(event:Event):void {
        this.external.debug("Main::onGameLoadError " + event.toString());
    }

    private function onGameUncaughtError(event:UncaughtErrorEvent):void {
        var error:* = event.error;
        if (error is Error) {
            this.external.debug("Main::onGameUncaughtError " + error.name + " " + error.message + " " + error.getStackTrace());
        } else {
            this.external.debug("Main::onGameUncaughtError " + String(error));
        }
    }

    public function get game():* {
        return this.refreshGameReference();
    }

    public function set game(value:*):void {
        this._game = value;
    }

    private function startGameResolver():void {
        if (this.resolveGameTimer) {
            this.resolveGameTimer.stop();
            this.resolveGameTimer.removeEventListener(TimerEvent.TIMER, this.onResolveGameTimer);
        }
        this.resolveGameTimer = new Timer(250);
        this.resolveGameTimer.addEventListener(TimerEvent.TIMER, this.onResolveGameTimer);
        this.resolveGameTimer.start();
    }

    private function onResolveGameTimer(event:TimerEvent):void {
        var candidate:* = this.refreshGameReference();
        if (this.isGameRoot(candidate)) {
            this.resolveGameTimer.stop();
            this.resolveGameTimer.removeEventListener(TimerEvent.TIMER, this.onResolveGameTimer);
            this.external.debug("Main::resolveGame found game root.");
            this.initializeGameBridge();
        } else if (this.isLoginRoot(candidate)) {
            this.notifyClientVisible();
        }
    }

    private function refreshGameReference():* {
        if (this.isGameRoot(this._game)) {
            return this._game;
        }
        var candidate:* = this.findGameRoot(this.stg);
        if (candidate) {
            this._game = candidate;
            return this._game;
        }
        return null;
    }

    private function findGameRoot(root:*):* {
        if (!root) {
            return null;
        }
        if (this.isGameRoot(root)) {
            return root;
        }
        if (root is DisplayObjectContainer) {
            var container:DisplayObjectContainer = root as DisplayObjectContainer;
            for (var i:int = 0; i < container.numChildren; i++) {
                var child:* = container.getChildAt(i);
                var found:* = this.findGameRoot(child);
                if (found) {
                    return found;
                }
            }
        }
        if (this.isLoginRoot(root)) {
            return root;
        }
        return null;
    }

    private function isGameRoot(value:*):Boolean {
        try {
            return value != null && value.sfc != null && value.world != null && value.params != null;
        } catch (ex:Error) {
            return false;
        }
        return false;
    }

    private function isLoginRoot(value:*):Boolean {
        try {
            return value != null && value.mcLogin != null && value["login"] is Function;
        } catch (ex:Error) {
            return false;
        }
        return false;
    }

    private function initializeGameBridge():void {
        if (this.bridgeReady || !this.isGameRoot(this.game)) {
            return;
        }
        this.bridgeReady = true;

        for (var param:String in root.loaderInfo.parameters) {
            this.game.params[param] = root.loaderInfo.parameters[param];
        }

        this.game.params.vars = this.vars;
        this.game.params.sURL = this.sURL;
        this.game.params.sBG = this.sBG;
        this.game.params.sTitle = this.sTitle;
        this.game.params.isEU = this.isEU;
        this.game.params.loginURL = this.loginURL;

        this.game.addEventListener(MouseEvent.CLICK, this.onGameClick);
        this.game.sfc.addEventListener(SFSEvent.onExtensionResponse, this.onExtensionResponse);

        if (this.game is DisplayObject && DisplayObject(this.game).loaderInfo) {
            this.gameDomain = DisplayObject(this.game).loaderInfo.applicationDomain;
        }

        Modules.init();
        this.stg.addEventListener(Event.ENTER_FRAME, Modules.handleFrame);
        this.stg.addEventListener(Event.ENTER_FRAME, this.monitorLoginScreen);
        this.game.stage.addEventListener(KeyboardEvent.KEY_DOWN, this.key_StageGame);

        if (this.customBackgroundURL && this.customBackgroundURL.length > 0) {
            this.initCustomBackground();
        }

        Auras.initialize();
        this.external.call('gameReady');
        this.notifyClientVisible();
    }

    private function notifyClientVisible():void {
        if (this.clientVisibleNotified) {
            return;
        }
        this.clientVisibleNotified = true;
        this.external.call('loaded');
    }

    public function onExtensionResponse(packet:*):void {
        this.external.call('pext', JSON.stringify(packet));
        this.scheduleHouseMoveReplay(packet);
    }

    private function scheduleHouseMoveReplay(packet:*):void {
        try {
            if (packet == null || packet.params == null || packet.params.type != "json") {
                return;
            }

            var data:* = packet.params.dataObj;
            if (data == null || data.houseData == null || data.strMapFileName == null) {
                return;
            }

            var key:String = String(data.areaId) + "|" + String(data.strMapFileName);
            var now:int = getTimer();
            if (key == this.houseReplayKey && now - this.houseReplayAt < 5000) {
                return;
            }

            this.houseReplayKey = key;
            this.houseReplayAt = now;
            this.pendingHouseMove = {
                r: -1,
                o: {
                    cmd: "moveToArea",
                    areaName: "house",
                    uoBranch: data.uoBranch,
                    strMapFileName: data.strMapFileName,
                    intType: "1",
                    monBranch: [],
                    houseData: this.cloneHouseDataForReplay(data.houseData),
                    sExtra: "",
                    areaId: data.areaId,
                    strMapName: "house"
                }
            };
            this.replayPendingHouseMove();
        } catch (ex:Error) {
            this.external.debug("Main::scheduleHouseMoveReplay failed " + ex.message);
        }
    }

    private function replayPendingHouseMove():void {
        try {
            if (this.pendingHouseMove != null) {
                handleJsonPacket(this.pendingHouseMove);
                this.external.debug("Main::replayed house moveToArea as visitor.");
            }
        } catch (ex:Error) {
            this.external.debug("Main::replayHouseMove failed " + ex.message);
        }
        this.pendingHouseMove = null;
    }

    private function cloneHouseDataForReplay(houseData:*):Object {
        var text:String = JSON.stringify(houseData);
        var username:String = this.currentUsernameForHouseReplay();
        if (username.length > 0) {
            text = text.replace(new RegExp(this.escapeRegExp(username), "ig"), "Veyra user");
        }
        return JSON.parse(text);
    }

    private function currentUsernameForHouseReplay():String {
        try {
            if (this.game != null && this.game.sfc != null && this.game.sfc.myUserName != null) {
                return String(this.game.sfc.myUserName);
            }
        } catch (ex1:Error) {
        }
        try {
            if (this.game != null && this.game.loginInfo != null && this.game.loginInfo.strUsername != null) {
                return String(this.game.loginInfo.strUsername);
            }
        } catch (ex2:Error) {
        }
        try {
            if (this.game != null && this.game.world != null && this.game.world.myAvatar != null) {
                var objData:* = this.game.world.myAvatar.objData;
                if (objData != null) {
                    if (objData.strUsername != null) {
                        return String(objData.strUsername);
                    }
                    if (objData.strName != null) {
                        return String(objData.strName);
                    }
                }
            }
        } catch (ex3:Error) {
        }
        return "";
    }

    private function escapeRegExp(value:String):String {
        return value.replace(/([\\\^\$\*\+\?\.\(\)\|\{\}\[\]])/g, "\\$1");
    }

    private function onGameClick(event:MouseEvent) : void
    {
        if (event == null)
                return;
        var className:String = getQualifiedClassName(event.target.parent);
        switch(event.target.name)
        {
            case "btCharPage":
                this.external.call("openWebsite","https://account.aq.com/CharPage?id=" + event.target.parent.txtUserName.text);
                return;
            case "btnWiki":
                if (event.target.parent.parent.parent.name == "qRewardPrev") {
                    this.external.call("openWebsite", "https://aqwwiki.wikidot.com/" + instance.game.ui.getChildByName("qRewardPrev").cnt.strTitle.text);
                } else if (className.indexOf("LPFFrameItemPreview") > -1) {
                    this.external.call("openWebsite","https://aqwwiki.wikidot.com/" + event.target.parent.tInfo.getLineText(0));
                } else if (className.indexOf("LPFFrameHousePreview") > -1) {
                    this.external.call("openWebsite","https://aqwwiki.wikidot.com/" + instance.game.ui.mcPopup.getChildByName("mcInventory").previewPanel.frames[3].mc.tInfo.getLineText(0));
                } else if (className.indexOf("mcQFrame") > -1) {
                    this.external.call("openWebsite","https://cse.google.com/cse?oe=utf8&ie=utf8&source=uds&safe=active&sort=&cx=015511893259151479029:wctfduricyy&start=0#gsc.tab=0&gsc.q=" + instance.game.getInstanceFromModalStack("QFrameMC").qData.sName);
                }
                return;
            case "hit":
                if (className.indexOf("cProto") > -1 && event.target.parent.ti.text.toLowerCase() == "wiki monster") {
                    this.external.call("openWebsite", "https://aqwwiki.wikidot.com/" + instance.game.world.myAvatar.target.objData.strMonName || "monsters");
                }
                return;
            default:
                return;
        }
    }

    private function monitorLoginScreen(event:Event):void {
        if (!this.customBGReady || !this.game || !this.game.mcLogin) return;
        
        if (this.game.mcLogin.visible && this.game.mcLogin.mcTitle) {
            var hasCustomBG:Boolean = false;
            var numChildren:int = this.game.mcLogin.mcTitle.numChildren;
            
            for (var i:int = 0; i < numChildren; i++) {
                if (this.game.mcLogin.mcTitle.getChildAt(i) == this.customBGReady) {
                    hasCustomBG = true;
                    break;
                }
            }
            
            if (!hasCustomBG) {
                if (this.customBGReady.parent) {
                    this.customBGReady.parent.removeChild(this.customBGReady);
                }
                while (this.game.mcLogin.mcTitle.numChildren > 0) {
                    this.game.mcLogin.mcTitle.removeChildAt(0);
                }
                this.game.mcLogin.mcTitle.addChild(this.customBGReady);
            }
        }
    }

    private function initCustomBackground():void {
        if (!this.customBackgroundURL) {
            return;
        }

        this.customBGLoader = new Loader();
        this.customBGLoader.contentLoaderInfo.addEventListener(Event.COMPLETE, function (e:Event):void {
            customBGReady = MovieClip(customBGLoader.content);

            var checkTimer:Timer = new Timer(100);
            checkTimer.addEventListener(TimerEvent.TIMER, function (timerEvent:TimerEvent):void {
                if (game) {
                    while (game.mcLogin.mcTitle.numChildren > 0) {
                        game.mcLogin.mcTitle.removeChildAt(0);
                    }
                    game.mcLogin.mcTitle.addChild(customBGReady);
                    checkTimer.stop();
                }
            });
            checkTimer.start();
        });
        this.customBGLoader.load(new URLRequest(this.customBackgroundURL));
        
        var lagKillerLoader:Loader = new Loader();
        lagKillerLoader.contentLoaderInfo.addEventListener(Event.COMPLETE, function (e:Event):void {
            customBGLagKiller = MovieClip(lagKillerLoader.content);
            if (game) {
                game.addChildAt(customBGLagKiller, 0);
                customBGLagKiller.visible = false;
            }
        });
        lagKillerLoader.load(new URLRequest(this.customBackgroundURL));
    }

    public function key_StageGame(kbArgs:KeyboardEvent):void {
        if (!(kbArgs.target is TextField || kbArgs.currentTarget is TextField)) {
            if (kbArgs.keyCode == this.game.litePreference.data.keys['Bank']) {
                if (this.game.stage.focus == null || (this.game.stage.focus != null && !('text' in this.game.stage.focus))) {
                    this.game.world.toggleBank();
                }
            }
        }
    }

    public function getGame():* {
        return this.game;
    }

    public function getExternal():Externalizer {
        return this.external;
    }

    public static function getGameObject(path:String):String {
        var obj:* = _getObjectS(instance.game, path);
        return JSON.stringify(obj);
    }


    private static function getProperties(obj:*):String {
        var p:*;
        var res:String = '';
        var val:String;
        var prop:String;
        for (p in obj) {
            prop = String(p);
            if (prop && prop !== '' && prop !== ' ') {
                val = String(obj[p]);
                res += prop + ': ' + val + ', ';
            }
        }
        res = res.substr(0, res.length - 2);
        return res;
    }

    public static function getGameObjectS(path:String):String {
        if (_gameClass == null) {
            _gameClass = instance.gameDomain.getDefinition(getQualifiedClassName(instance.game)) as Class;
        }
        var obj:* = _getObjectS(_gameClass, path);
        return JSON.stringify(obj);
    }

    public static function getGameObjectKey(path:String, key:String):String {
        var obj:* = _getObjectS(instance.game, path);
        var obj2:* = obj[key];
        return (JSON.stringify(obj2));
    }

    public static function setGameObject(path:String, value:*):void {
        var parts:Array = path.split('.');
        var varName:String = parts.pop();
        var obj:* = _getObjectA(instance.game, parts);
        obj[varName] = value;
    }

    public static function setGameObjectKey(path:String, key:String, value:*):void {
        var parts:Array = path.split('.');
        var obj:* = _getObjectA(instance.game, parts);
        obj[key] = value;
    }

    public static function getArrayObject(path:String, index:int):String {
        var obj:* = _getObjectS(instance.game, path);
        return JSON.stringify(obj[index]);
    }

    public static function setArrayObject(path:String, index:int, value:*):void {
        var obj:* = _getObjectS(instance.game, path);
        obj[index] = value;
    }

    public static function callGameFunction(path:String, ...args):String {
        var parts:Array = path.split('.');
        var funcName:String = parts.pop();
        var obj:* = _getObjectA(instance.game, parts);
        var func:Function = obj[funcName] as Function;
        return JSON.stringify(func.apply(obj, args));
    }

    public static function callGameFunction0(path:String):String {
        var parts:Array = path.split('.');
        var funcName:String = parts.pop();
        var obj:* = _getObjectA(instance.game, parts);
        var func:Function = obj[funcName] as Function;
        return JSON.stringify(func.apply(obj));
    }

    public static function callGameFunctionSafe(path:String, ...args):String {
        return _safeCallGameFunction(path, args);
    }

    public static function callGameFunction0Safe(path:String):String {
        return _safeCallGameFunction(path, []);
    }

    private static function _safeCallGameFunction(path:String, args:Array):String {
        try {
            var parts:Array = path.split('.');
            var funcName:String = parts.pop();
            var obj:* = _getObjectA(instance.game, parts);
            if (obj == null) {
                return JSON.stringify({ ok: false, path: path, args: args, message: 'Target object is null: ' + parts.join('.') });
            }
            var func:Function = obj[funcName] as Function;
            if (func == null) {
                return JSON.stringify({ ok: false, path: path, args: args, message: 'Target function is missing: ' + funcName });
            }
            return JSON.stringify({ ok: true, value: func.apply(obj, args) });
        } catch (ex:Error) {
            return JSON.stringify({
                ok: false,
                path: path,
                args: args,
                errorId: ex.errorID,
                errorName: getQualifiedClassName(ex),
                message: ex.message,
                stack: ex.getStackTrace()
            });
        } catch (unknown:*) {
            return JSON.stringify({
                ok: false,
                path: path,
                args: args,
                message: String(unknown)
            });
        }
        return JSON.stringify({ ok: false, path: path, args: args, message: 'Unknown Flash call failure.' });
    }

    public static function selectArrayObjects(path:String, selector:String):String {
        var obj:* = _getObjectS(instance.game, path);
        if (!(obj is Array)) {
            instance.external.debug('selectArrayObjects target is not an array');
            return '';
        }
        var array:Array = obj as Array;
        var nArray:Array = [];
        for (var j:int = 0; j < array.length; j++) {
            nArray.push(_getObjectS(array[j], selector));
        }
        return JSON.stringify(nArray);
    }

    public static function _getObjectS(root:*, path:String):* {
        return _getObjectA(root, path.split('.'));
    }

    public static function _getObjectA(root:*, parts:Array):* {
        var obj:* = root;
        for (var i:int = 0; i < parts.length; i++) {
            obj = obj[parts[i]];
        }
        return obj;
    }

    public static function isNull(path:String):String {
        try {
            return (_getObjectS(instance.game, path) == null).toString();
        } catch (ex:Error) {
        }
        return 'true';
    }

    public static function isTrue():String {
        return true.toString();
    }

    public static function injectScript(uri:String):void {
        var ploader:Loader = new Loader();
        ploader.contentLoaderInfo.addEventListener(Event.COMPLETE, onScriptLoaded);
        var context:LoaderContext = new LoaderContext();
        context.allowCodeImport = true;
        ploader.load(new URLRequest(uri), context);
    }

    private static function onScriptLoaded(event:Event):void {
        try {
            var obj:* = LoaderInfo(event.target).loader.content;
            obj.run(instance);
        } catch (ex:Error) {
            instance.external.debug('Error while running injection: ' + ex);
        }
    }

    public static function catchPackets():void {
        instance.game.sfc.addEventListener(SFSEvent.onDebugMessage, packetReceived);
    }

    public static function sendClientPacket(packet:String, type:String):void {
        ensureExtHandler();
        switch (type) {
            case 'xml':
                xmlReceived(packet);
                break;
            case 'json':
                jsonReceived(packet);
                break;
            case 'str':
                strReceived(packet);
                break;
            default:
                instance.external.debug('Invalid packet type.');
        }
    }

    public static function xmlReceived(packet:String):void {
        _handler.handleMessage(new XML(packet), 'xml');
    }

    public static function jsonReceived(packet:String):void {
        handleJsonPacket(JSON.parse(packet)['b']);
    }

    public static function strReceived(packet:String):void {
        var array:Array = packet.substr(1, packet.length - 2).split('%');
        _handler.handleMessage(array.splice(1, array.length - 1), 'str');
    }

    private static function ensureExtHandler():void {
        if (_handler == null) {
            var cls:Class = Class(instance.gameDomain.getDefinition('it.gotoandplay.smartfoxserver.handlers.ExtHandler'));
            _handler = new cls(instance.game.sfc);
        }
    }

    private static function handleJsonPacket(body:Object):void {
        ensureExtHandler();
        _handler.handleMessage(body, 'json');
    }

    public static function packetReceived(packet:*):void {
        if (packet.params.message.indexOf('%xt%zm%') > -1) {
            instance.external.call('packet', packet.params.message.split(':', 2)[1].trim());
        } else {
            instance.external.call("packetFromServer",processPacket(packet.params.message));
        }
    }

    private static function processPacket(param1:String) : String
    {
        var _loc2_:int = 0;
        param1 = param1.replace("[Sending - STR]: ", "");
        param1 = param1.replace("[ RECEIVED ]: ", "");
        param1 = param1.replace("[Sending]: ", "");
        if(param1.indexOf(", (len: ") > -1)
        {
            _loc2_ = param1.indexOf(", (len: ");
            param1 = param1.slice(0,_loc2_);
        }
        return param1;
    }
}
}
