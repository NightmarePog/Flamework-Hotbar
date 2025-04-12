import { Item } from "./itemClass";
import { items } from "./inventoryItems/items";

export const StringToClass: Record<string, new (...args: never[]) => Item> = {
	Box: items["Box"],
};

export class Slot {
	private item: Item | undefined = undefined;

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
