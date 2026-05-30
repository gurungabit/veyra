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

        var buyItem:* = item;
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
                return getShopItemByID(item.ItemID, item.ShopItemID);
            }
        }
        return null;
    }

    public static function getShopItemByID(itemID:int, shopItemID:int):* {
        for each (var item:* in Main.instance.game.world.shopinfo.items) {
            if (item && item.ItemID == itemID && (shopItemID == -1 || item.ShopItemID == shopItemID)) {
                return item;
            }
        }
        return null;
    }
}
}
