import { Functions } from "server/network";
import { Item, ItemData } from "shared/types/items/Item";
import { getInventoryFromID } from "server/logic/inventory/inventoryLogic";
import { Inventory } from "server/logic/inventory/inventoryDatabase";
import { getItemRegistry } from "shared/types/items/itemsRegistry";

Functions.pickUp.setCallback((requestingPlayer, slot, itemID: number, instance: Instance): boolean => {
	const itemClass = getItemRegistry(itemID);
	if (itemClass !== undefined) {
		const playerID: number = requestingPlayer.UserId;
		const playerInventory: Inventory | undefined = getInventoryFromID(playerID);
		if (playerInventory) {
			instance.Destroy();
			playerInventory.pickItem(slot, itemClass);
			return true;
		}
	}
	return false;
});

Functions.dropItem.setCallback((requestingPlayer, slot): boolean => {
	const playerID: number = requestingPlayer.UserId;
	const playerInventory: Inventory | undefined = getInventoryFromID(playerID);
	if (playerInventory) {
		return playerInventory.dropItem(slot, requestingPlayer);
	}
	return false;
});

Functions.useItem.setCallback((requestingPlayer, slot): boolean => {
	const playerID: number = requestingPlayer.UserId;
	const playerInventory: Inventory | undefined = getInventoryFromID(playerID);
	if (playerInventory) {
		return playerInventory.useItem(slot);
	}
	return false;
});

Functions.getItemsInfo.setCallback((requestingPlayer): ItemData[] => {
	const playerID: number = requestingPlayer.UserId;
	const playerInventory: Inventory | undefined = getInventoryFromID(playerID);
	if (playerInventory) {
		return playerInventory.getSlotItems();
	}
	return [];
});
