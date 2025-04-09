const stringToClass: Record<string, object> = {}; // TODO STRING TO CLASS DICTIONARY

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

	getInfo() {
		if (this.item === undefined) {
			return { undefined };
		} else {
			return this.item.getInfo();
		}
	}
}

export class Item {
	public id: number;
	private name: string;
	private model: Model;
	private description?: string;

	constructor(name: string, model: Model, description: string) {
		this.id = 1;
		this.name = name;
		this.model = model;
		this.description = description;
	}
	use(): void {
		print(`${this.name} used!`);
	}

	getInfo() {
		return {
			id: this.id,
			name: this.name,
			description: this.description,
			model: this.model,
		};
	}
}
