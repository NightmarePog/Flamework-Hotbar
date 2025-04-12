// Code Created by Nightmarepog
// Inventory-service
import { Functions } from "server/network";
import { Slot, StringToClass } from "shared/inventory";
import { Item } from "shared/itemClass";
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

	addItem(slotIndex: number, Instance: Instance) {
		const instanceName: string = Instance.Name;
		const item = StringToClass[instanceName];
		if (slotIndex >= this.slots.size() || slotIndex < 0) {
			print("Request for adding item failed: parameter is higher than slot count");
		} else {
			this.slots[slotIndex].addItem(new item());
			Instance.Destroy();
			this.update();
		}
	}

	removeItem(slotIndex: number, plr: Player) {
		if (slotIndex >= this.slots.size()) {
			print("Request for adding item failed: parameter is higher than slot count");
		} else {
			const ItemProps = this.slots[slotIndex].getInfo();

			if (ItemProps && "model" in ItemProps && typeIs(ItemProps.model, "Instance")) {
				const Model: Model = ItemProps.model;
				const ClonedModel: Model = Model.Clone();

				const playerPosition = plr.Character?.PrimaryPart?.Position;

				if (playerPosition && plr.Character?.PrimaryPart) {
					const lookVector = plr.Character.PrimaryPart.CFrame.LookVector;
					const newPosition = playerPosition.add(lookVector.mul(2));
					let ModelPosition = ClonedModel.PrimaryPart?.Position;
					ModelPosition = newPosition;
					// Item will spawn 2 studs in front of the player
				}
			}

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
	public useItem(slotIndex: number) {
		if (slotIndex >= this.slots.size()) {
			print("Request for adding item failed: parameter is higher than slot count");
		} else {
			this.slots[slotIndex].useItem();
		}
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

Functions.addItem.setCallback((plr: Player, slotIndex: number, instance) => {
	const inventory = inventories[plr.UserId];
	if (inventory !== undefined) {
		inventory.addItem(slotIndex, instance);
		return undefined;
	}
});

Functions.removeItem.setCallback((plr: Player, slotIndex: number) => {
	const inventory = inventories[plr.UserId];
	if (inventory !== undefined) {
		inventory.removeItem(slotIndex, plr);
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

Functions.useItem.setCallback((plr: Player) => {
	const inventory = inventories[plr.UserId];
	if (inventory !== undefined) {
		return undefined;
	}
});

print("Inventory manager initalized");
