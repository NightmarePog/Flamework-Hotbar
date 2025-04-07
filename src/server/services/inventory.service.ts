// Code Created by Nightmarepog
// Inventory-runtime
import { Service } from "@flamework/core";
import { Functions } from "server/network";
import { Slot, Item } from "shared/inventory";
import { items } from "shared/inventoryItems/items";
const invSlots = 5;

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

Functions.createInventory.setCallback((plr) => {
	const newInventory = new Inventory(invSlots);
	inventories[plr.UserId] = newInventory;
	return newInventory.slotCount;
});

Functions.deleteInventory.setCallback((plr) => {
	inventories[plr.UserId] = undefined;
	return 0;
});

print("Inventory manager initalized");
