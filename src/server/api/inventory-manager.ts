// Code Created by Nightmarepog
// Inventory-runtime

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

class Slot {
	private item: Item | undefined = undefined;
	constructor() {
		print("slot created!");
	}

	addItem(Item: Item) {
		this.item = Item;
		print("Item Added into the slot!");
	}

	removeItem(): undefined {
		if (this.item === undefined) {
			print("Slot is empty, nothing was deleted");
		} else {
			this.item = undefined;
			print("Item was removed from slot!");
		}
	}

	useItem() {
		if (this.item === undefined) {
			print("Player has no item in this slot!");
		} else {
			this.item.use();
		}
	}
}

class Item {
	private id: number;
	private name: string;
	private description?: string;

	constructor(id: number, name: string) {
		this.id = id;
		this.name = name;
	}
	use(): void {
		print(`${this.name} used!`);
	}

	returnInfo() {
		return {
			id: this.id,
			name: this.name,
			description: this.description,
		};
	}
}

print("Inventory manager initalized");
