import { Item } from "shared/types/items/Item";
import array from "shared/misc/array";
import { Emptyslot } from "shared/types/items/EmptySlot";

class Inventory {
	private slotCount: number;
	private slotItems: (Item | Emptyslot)[] = [];

	constructor(slotCount: number) {
		this.slotCount = slotCount;
		array(this.slotCount).forEach(() => this.slotItems.push(Emptyslot));
	}

	public pickItem(slot: number) {}

	public dropItem(slot: number) {}

	public useItem(slot: number) {}

	public getSlotItems() {}
}
