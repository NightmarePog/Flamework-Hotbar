export class Slot {
	private item: Item | undefined = undefined;
	constructor() {
		print("slot created!");
	}

	addItem(Item: Item) {
		if (this.item === undefined) {
			this.item = Item;
			print("Item Added into the slot!");
		}
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

export class Item {
	public id: number;
	private name: string;
	private description?: string;

	constructor(name: string, description: string) {
		this.id = 1;
		this.name = name;
		this.description = description;
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
