// Code Created by Nightmarepog
// Inventory-runtime
import { Service } from "@flamework/core";
import { Functions } from "server/network";
import { GlobalFunctions } from "shared/network";
import { Slot, Item } from "shared/inventory";
import { items } from "shared/inventoryItems/items";
const invSlots = 5;

class Inventory {
	private slots: Slot[];

	constructor(slotCount: number) {
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
}

class InventoryNetwork {}

print("Inventory manager initalized");
