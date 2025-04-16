import { Functions } from "server/network";
import { Item } from "shared/types/items/Item";
import { ItemData } from "shared/types/items/Item";
import { getInventoryFromID } from "server/logic/inventory/inventoryLogic";
import { Inventory } from "server/logic/inventory/inventoryDatabase";

Functions.pickUp.setCallback(async (requestingPlayer, slot, itemClass: new () => Item): Promise<boolean> => {
	const playerID: number = requestingPlayer.UserId;
	const playerInventory: Inventory | undefined = getInventoryFromID(playerID);
	if (playerInventory) {
		return playerInventory.pickItem(slot, itemClass);
	}
	return false;
});

Functions.dropItem.setCallback(async (requestingPlayer, slot): Promise<boolean> => {
	const playerID: number = requestingPlayer.UserId;
	const playerInventory: Inventory | undefined = getInventoryFromID(playerID);
	if (playerInventory) {
		return playerInventory.dropItem(slot);
	}
	return false;
});

Functions.useItem.setCallback(async (requestingPlayer, slot): Promise<boolean> => {
	const playerID: number = requestingPlayer.UserId;
	const playerInventory: Inventory | undefined = getInventoryFromID(playerID);
	if (playerInventory) {
		return playerInventory.useItem(slot);
	}
	return false;
});

Functions.getItemsInfo.setCallback(async (requestingPlayer): Promise<ItemData[]> => {
	const playerID: number = requestingPlayer.UserId;
	const playerInventory: Inventory | undefined = getInventoryFromID(playerID);
	if (playerInventory) {
		return playerInventory.getSlotItems();
	}
	return [];
});
