package veyra.api {

import veyra.Main;

public class Shop {

    public function Shop() {
        super();
    }

    public static function buyItemByName(name:String, quantity:int = -1):void {
        var item:* = getShopItem(name);
        if (item != null) {
            buyShopItem(item, quantity);
        }
    }

    public static function buyItemByID(id:int, shopItemID:int, quantity:int = -1):void {
        var item:* = getShopItemByID(id, shopItemID);
        if (item != null) {
            buyShopItem(item, quantity);
        }
    }

    private static function buyShopItem(item:*, quantity:int):void {
        if (quantity == -1) {
            Main.instance.game.world.sendBuyItemRequest(item);
            return;
        }

        var buyItem:* = {};
        buyItem.iSel = item;
        buyItem.iQty = quantity;
        buyItem.iSel.iQty = quantity;
        buyItem.accept = 1;
        Main.instance.game.world.sendBuyItemRequestWithQuantity(buyItem);
    }

    public static function getShopItem(name:String):* {
        var lowerName:String = name.toLowerCase();
        for each (var item:* in Main.instance.game.world.shopinfo.items) {
            if (item && item.sName.toLowerCase() == lowerName) {
                return item;
            }
        }
        return null;
    }

    public static function getShopItemByID(itemID:int, shopItemID:int):* {
        for each (var item:* in Main.instance.game.world.shopinfo.items) {
            if (item && itemIDOf(item) == itemID && (shopItemID == -1 || shopItemIDOf(item) == shopItemID)) {
                return item;
            }
        }
        return null;
    }

    private static function itemIDOf(item:*):int {
        var id:int = positiveInt(item.ItemID);
        if (id > 0) return id;
        id = positiveInt(item.iID);
        if (id > 0) return id;
        id = positiveInt(item.itemId);
        if (id > 0) return id;
        id = positiveInt(item.id);
        if (id > 0) return id;
        return positiveInt(item.ID);
    }

    private static function shopItemIDOf(item:*):int {
        var id:int = positiveInt(item.ShopItemID);
        if (id > 0) return id;
        id = positiveInt(item.iShopItemID);
        if (id > 0) return id;
        id = positiveInt(item.shopItemId);
        if (id > 0) return id;
        return positiveInt(item.iSel);
    }

    private static function positiveInt(value:*):int {
        var id:int = int(value);
        return id > 0 ? id : 0;
    }
}
}
