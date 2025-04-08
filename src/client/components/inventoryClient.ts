import { InputHandle } from "./PickupInputHandling";
import assets from "shared/assets";
import { Functions } from "client/network";
import { updateData } from "client/ui/inventory/App";
import { Item } from "shared/inventory";

class InventoryClient {
	constructor() {
		this.initialize();
	}

	private async initialize() {
		Functions.createInventory();
		const slotCount = await Functions.getSlotCount.invoke();
		updateData({ slotCount });
	}

	public PickUp(slot: number, Item: new () => Item) {
		Functions.addItem.invoke(slot, Item);
	}

	public Drop(slot: number) {
		Functions.removeItem.invoke(slot);
	}

	public Use(slot: number) {
		Functions.useItem.invoke(slot);
	}
}

const inv = new InventoryClient();
