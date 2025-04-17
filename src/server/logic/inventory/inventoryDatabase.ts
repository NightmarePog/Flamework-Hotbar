import { Item, ItemData } from "shared/types/items/Item";
import array from "shared/misc/array";
import { Emptyslot } from "shared/types/items/EmptySlot";

export class Inventory {
	private slotCount: number = 0;
	private slotItems: (Item | Emptyslot)[] = [];

	constructor(slotCount: number) {
		this.initialize(slotCount);
	}

	private initialize(slotCount: number) {
		this.slotCount = slotCount;
		print("slot count: ", slotCount);
		array(this.slotCount).forEach((index) => {
			print("meow :3");
			this.slotItems[index] = new Emptyslot();
			print("empty?", new Emptyslot());
			print("unfinished loll: ", this.slotItems);
		});
		print("generated inv looks like this: ", this.slotItems);
	}

	public pickItem(slot: number, ItemClass: new () => Item) {
		if (this.isValidSlot(slot)) {
			print(this.slotItems);
			this.slotItems[slot] = new ItemClass();
			print("pickitem", this.slotItems);
			return true;
		}
		return false;
	}

	public dropItem(slot: number) {
		if (this.isValidSlot(slot)) {
			this.slotItems[slot] = new Emptyslot();
			return true;
		}
		return false;
	}

	public useItem(slot: number) {
		if (this.isValidSlot(slot)) {
			const item = this.slotItems[slot];
			if (!(item instanceof Emptyslot)) {
				item.use();
				return true;
			}
		}
		return false;
	}

	public getSlotItems(): ItemData[] {
		const buffer: ItemData[] = [];
		const emptyslot = new Emptyslot();
		this.slotItems.forEach((item) => {
			buffer.push(item.getInfo());
		});
		return buffer;
	}

	private isValidSlot(slotNumber: number): boolean {
		return slotNumber - 1 <= this.slotCount;
	}

	public destroyInventory() {
		this.slotCount = 0;
		this.slotItems = [];
		return true;
	}

	public resetInventory() {
		this.slotCount = 5;
		this.initialize(this.slotCount);
		return true;
	}
}
