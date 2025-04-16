import { Inventory } from "./inventoryDatabase";
import { Players } from "@rbxts/services";
// TODO WRONG ID ASSINGING SLOTS!!!
const inventories = new Map<number, Inventory>();

Players.PlayerAdded.Connect((addedPlayer: Player) => {
	const playerID = addedPlayer.UserId;
	const newInventory = new Inventory(5);
	inventories.set(playerID, newInventory);
	print("Player joined, inventory assigned.");
});

Players.PlayerRemoving.Connect((removedPlayer: Player) => {
	const playerID = removedPlayer.UserId;

	if (inventories.has(playerID)) {
		inventories.delete(playerID);
		print(`Player left, inventory removed for ${removedPlayer.Name}.`);
	} else {
		print(`No inventory found for ${removedPlayer.Name}.`);
	}
});

export function getInventoryFromID(ID: number) {
	return inventories.get(ID);
}
