package veyra.api {

import veyra.Main;

public class Monster {

    public function Monster() {
        super();
    }

    public static function attackMonsterByID(id:int):String {
        var bestTarget:* = getBestMonsterTargetByID(id);
        return attackTarget(bestTarget);
    }

    public static function attackMonsterByName(name:String):String {
        var bestTarget:* = getBestMonsterTarget(name);
        return attackTarget(bestTarget);
    }

    private static function sortMonstersByHP(a:*, b:*):Number {
        var aHP:int = monsterHP(a);
        var bHP:int = monsterHP(b);

        var aAlive:Boolean = aHP > 0;
        var bAlive:Boolean = bHP > 0;

        if (aAlive != bAlive) {
            return aAlive ? -1 : 1;
        }

        if (aHP != bHP) {
            return aHP - bHP;
        }

        var aMapID:int = monsterMapID(a);
        var bMapID:int = monsterMapID(b);
        return aMapID - bMapID;
    }

    public static function getBestMonsterTarget(name:String):* {
        var targetCandidates:Array = [];
        var world:* = Main.instance.game.world;
        var lowerName:String = name.toLowerCase();
        var isWildcard:Boolean = name == '*';

        for each (var monster:* in world.getMonstersByCell(world.strFrame)) {
            if (isAttackable(monster)) {
                var monName:String = monster.objData.strMonName.toLowerCase();
                if (isWildcard || monName.indexOf(lowerName) > -1) {
                    targetCandidates.push(monster);
                }
            }
        }

        if (targetCandidates.length == 0)
            return null;

        targetCandidates.sort(sortMonstersByHP);
        return targetCandidates[0];
    }

    public static function getBestMonsterTargetByID(id:int):* {
        var targetCandidates:Array = [];
        var world:* = Main.instance.game.world;

        for each (var monster:* in world.getMonstersByCell(world.strFrame)) {
            if (isAttackable(monster) && monster.objData && (monster.objData.MonMapID == id || monster.objData.MonID == id)) {
                targetCandidates.push(monster);
            }
        }

        if (targetCandidates.length == 0)
            return null;

        targetCandidates.sort(sortMonstersByHP);
        return targetCandidates[0];
    }

    public static function availableMonstersInCell():String {
        var retMonsters:Array = [];
        var world:* = Main.instance.game.world;
        
        for each (var monster:* in world.getMonstersByCell(world.strFrame)) {
            if (monster.pMC != null) {
                retMonsters.push(getMonData(monster));
            }
        }
        return JSON.stringify(retMonsters);
    }

    public static function getTargetMonster():String {
        var world:* = Main.instance.game.world;
        var monster:* = world.myAvatar.target
        if (!monster || (monster.dataLeaf && monster.dataLeaf.intHP <= 0)) {
            world.cancelTarget();
            return JSON.stringify({});
        }
        return JSON.stringify(getMonData(monster));
    }

    public static function getMonsters():String {
        var retMonsters:Array = [];
        for each (var monster:* in Main.instance.game.world.monsters) {
            retMonsters.push(getMonData(monster));
        }
        return JSON.stringify(retMonsters);
    }

    public static function getMonData(mon:Object):Object
    {
        var monsterData:Object = {};
        for (var prop:String in mon.objData) {
            monsterData[prop] = mon.objData[prop];
        }
        if (mon.dataLeaf) {
            monsterData.intHP = mon.dataLeaf.intHP;
            monsterData.intHPMax = mon.dataLeaf.intHPMax;
            monsterData.intState = mon.dataLeaf.intState;
        }
        return monsterData;
    }

    private static function attackTarget(target:*):String {
        var world:* = Main.instance.game.world;
        if (target != null && isAttackable(target)) {
            if (world.myAvatar.target && monsterHP(world.myAvatar.target) <= 0) {
                world.cancelTarget();
            }
            Main.instance.game.world.setTarget(target);
            Main.instance.game.world.approachTarget();
            return true.toString();
        }
        world.cancelTarget();
        return false.toString();
    }

    private static function isAttackable(monster:*):Boolean {
        return monster != null && monster.pMC != null && monster.dataLeaf != null && monsterHP(monster) > 0;
    }

    private static function monsterHP(monster:*):int {
        return (monster && monster.dataLeaf && monster.dataLeaf.intHP) ? monster.dataLeaf.intHP : 0;
    }

    private static function monsterMapID(monster:*):int {
        return (monster && monster.objData && monster.objData.MonMapID) ? monster.objData.MonMapID : 0;
    }
}
}
