package veyra.module {
import flash.display.DisplayObject;
import flash.display.MovieClip;
import flash.utils.getQualifiedClassName;

import veyra.Main;

public class DisableFX extends Module {
    private var _fxStore:Object = {};
    private var _reported:Boolean = false;

    public function DisableFX() {
        super("DisableFX");
    }

    override public function onToggle(game:*):void {
        if (!game || !game.world) {
            return;
        }

        var world:* = game.world;
        var monsters:* = world.monsters;
        var currentFrame:String = world.strFrame;
        var changed:int = 0;
        
        for (var mid:* in monsters) {
            var monster:* = monsters[mid];
            try {
                if (monster.dataLeaf && monster.dataLeaf.strFrame == currentFrame && monster.pMC && monster.dataLeaf.intState > 0) {
                    var mmc:MovieClip = monster.pMC as MovieClip;
                    if (enabled && childMovieClip(mmc, 1)) {
                        mmc = childMovieClip(mmc, 1);
                    }
                    changed += toggleAnims(mmc, !enabled);
                    if (enabled && mmc) {
                        mmc.gotoAndStop("Idle");
                    }
                }
            } catch (monsterError:Error) {
            }
        }

        for (var aid:* in world.avatars) {
            var avatar:* = world.avatars[aid];
            try {
                if (avatar.objData && avatar.pMC) {
                    toggleAvatarFX(avatar, !enabled);
                    changed += toggleAnims(movieClipAt(avatar.pMC, "mcChar"), !enabled);
                    changed += toggleAnims(movieClipAt(avatar.pMC.mcChar.weapon, "mcWeapon"), !enabled);
                    changed += toggleAnims(childMovieClip(avatar.pMC.mcChar.weaponOff, 0), !enabled);
                }
            } catch (avatarError:Error) {
            }
        }

        if (enabled && !_reported) {
            _reported = true;
            try {
                Main.instance.external.debug("DisableFX module active; frozen clips: " + changed);
            } catch (reportError:Error) {
            }
        } else if (!enabled) {
            _reported = false;
        }
    }

    override public function onFrame(game:*):void {
        onToggle(game);
    }

    private function toggleAvatarFX(avatar:*, enableAnimations:Boolean):void {
        var key:String = avatarKey(avatar);
        if (!key) {
            return;
        }

        try {
            if (!enableAnimations) {
                if (!(key in _fxStore) && avatar.rootClass) {
                    _fxStore[key] = avatar.rootClass.spFX;
                }
                if (avatar.rootClass) {
                    avatar.rootClass.spFX = null;
                }
                if (avatar.pMC && avatar.pMC.spFX) {
                    avatar.pMC.spFX.visible = false;
                }
            } else if ((key in _fxStore) && avatar.rootClass) {
                avatar.rootClass.spFX = _fxStore[key];
                delete _fxStore[key];
                if (avatar.pMC && avatar.pMC.spFX) {
                    avatar.pMC.spFX.visible = true;
                }
            }
        } catch (fxError:Error) {
        }
    }

    private function toggleAnims(root:MovieClip, enableAnimations:Boolean):int {
        if (!root || getQualifiedClassName(root).indexOf("Display") >= 0) {
            return 0;
        }

        var changed:int = 0;
        try {
            toggleAnim(root, enableAnimations);
            changed += 1;
        } catch (rootError:Error) {
            return changed;
        }

        var childCount:int = 0;
        try {
            childCount = root.numChildren;
        } catch (countError:Error) {
            return changed;
        }

        for (var i:int = 0; i < childCount; i++) {
            try {
                var child:DisplayObject = root.getChildAt(i);
                if (child is MovieClip) {
                    changed += toggleAnims(child as MovieClip, enableAnimations);
                }
            } catch (childError:Error) {
            }
        }
        return changed;
    }

    private function toggleAnim(mc:MovieClip, enableAnimations:Boolean):void {
        if (enableAnimations) {
            mc.gotoAndPlay(0);
        } else {
            mc.gotoAndStop(0);
        }
    }

    private function movieClipAt(root:*, key:String):MovieClip {
        try {
            if (root && root[key] is MovieClip) {
                return root[key] as MovieClip;
            }
        } catch (error:Error) {
        }
        return null;
    }

    private function childMovieClip(root:*, index:int):MovieClip {
        try {
            if (root && root.numChildren > index && root.getChildAt(index) is MovieClip) {
                return root.getChildAt(index) as MovieClip;
            }
        } catch (error:Error) {
        }
        return null;
    }

    private function avatarKey(avatar:*):String {
        try {
            if (avatar.uid) {
                return String(avatar.uid);
            }
            if (avatar.objData && avatar.objData.strUsername) {
                return String(avatar.objData.strUsername);
            }
        } catch (error:Error) {
        }
        return "";
    }
}

}
