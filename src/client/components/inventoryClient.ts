import { InputHandle } from "./InputHandling";
import { RaycastHandler } from "./itemRaycast";
import assets from "shared/assets";
import { Functions } from "client/network";
import { updateData, getSelectedSlotData } from "client/ui/inventory/App";
import { Item } from "shared/inventory";
import { InventoryHandler } from "client/ui/inventory/components/InventoryHandler";
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

const Raycast = new RaycastHandler(false);
const inv = new InventoryClient();
const inputHandling = new InputHandle();

inputHandling.KeyEPressed.Connect(() => {
	const RaycastResult = Raycast.FireSingleRaycast();
	if (RaycastResult !== undefined) {
		const data = getSelectedSlotData();
		if (data.iconImg === 0) {
			inv.PickUp(data.selectedIndex, RaycastResult.Instance.Name());
		}
	}
});
