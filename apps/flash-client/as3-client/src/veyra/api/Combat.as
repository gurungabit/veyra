package veyra.api {

import veyra.Main;

public class Combat {
    private static const INFINITE_RANGE:int = 20000;
    private static const FALLBACK_RANGE:int = 300;
    private static var _rangeStore:Object = {};
    private static var _rangeEnabled:Boolean = false;

    public function Combat() {
        super();
    }

    public static function magnetize():void {
        var target:* = Main.instance.game.world.myAvatar.target;
        if (target) {
            target.pMC.x = Main.instance.game.world.myAvatar.pMC.x;
            target.pMC.y = Main.instance.game.world.myAvatar.pMC.y;
        }
    }

    public static function infiniteRange(enabled:Boolean = true):void {
        var active:Array = Main.instance.game.world.actions.active;
        if (active == null) {
            return;
        }

        if (enabled) {
            for (var i:int = 0; i < 6 && i < active.length; i++) {
                if (active[i] == null) {
                    continue;
                }
                if (!_rangeEnabled) {
                    var currentRange:int = int(active[i].range);
                    _rangeStore[i] = currentRange < 5000 ? currentRange : FALLBACK_RANGE;
                }
                active[i].range = INFINITE_RANGE;
            }
            _rangeEnabled = true;
            return;
        }

        for (i = 0; i < 6 && i < active.length; i++) {
            if (active[i] == null) {
                continue;
            }
            active[i].range = _rangeStore[i] != null ? int(_rangeStore[i]) : FALLBACK_RANGE;
        }
        _rangeStore = {};
        _rangeEnabled = false;
    }
}
}
