// Code Created by Nightmarepog
// Inventory-runtime
import { Functions } from "server/network";
import { Slot, Item } from "shared/inventory";
const slotCount = 5;

const inventories: Record<number, Inventory | undefined> = {};

class Inventory {
	private slots: Slot[];
	public slotCount: number;

	constructor(slotCount: number) {
		this.slotCount = slotCount;
		this.slots = [];
		for (let i = 0; i < slotCount; i++) {
			this.slots.push(new Slot());
			this.update();
		}
	}

	addItem(slotIndex: number, item: Item) {
		if (slotIndex >= this.slots.size() || slotIndex < 0) {
			print("Request for adding item failed: parameter is higher than slot count");
		} else {
			this.slots[slotIndex].addItem(item);
			this.update();
		}
	}

	removeItem(slotIndex: number) {
		if (slotIndex >= this.slots.size()) {
			print("Request for adding item failed: parameter is higher than slot count");
		} else {
			this.slots[slotIndex].removeItem();
			this.update();
		}
	}

	private update() {
		print("inventory updated!");
	}

	public getData() {
		const result: ReturnType<Slot["getInfo"]>[] = [];
		for (let index = 0; index < this.slots.size(); index++) {
			result.push(this.slots[index].getInfo());
		}
		return result;
	}
}

Functions.createInventory.setCallback((plr: Player) => {
	const newInventory = new Inventory(slotCount);
	inventories[plr.UserId] = newInventory;
	return newInventory.slotCount;
});

Functions.deleteInventory.setCallback((plr: Player) => {
	inventories[plr.UserId] = undefined;
	return 0;
});

Functions.addItem.setCallback((plr: Player, slotIndex: number, item: new () => Item) => {
	const inventory = inventories[plr.UserId];
	if (inventory !== undefined) {
		inventory.addItem(slotIndex, new item());
		return undefined;
	}
});

Functions.removeItem.setCallback((plr: Player, slotIndex: number) => {
	const inventory = inventories[plr.UserId];
	if (inventory !== undefined) {
		inventory.removeItem(slotIndex);
		return undefined;
	}
});

Functions.getInventoryInfo.setCallback((plr: Player) => {
	const inventory = inventories[plr.UserId];
	if (inventory !== undefined) {
		return inventory.getData();
	}
});

Functions.getSlotCount.setCallback((plr: Player) => {
	return slotCount;
});

print("Inventory manager initalized");
