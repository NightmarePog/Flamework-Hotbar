import { InputHandle } from "./InputHandling";
import { RaycastHandler } from "./itemRaycast";
import assets from "shared/assets";
import { Functions } from "client/network";
import { updateData, getSelectedSlotData } from "client/ui/inventory/App";
import { Item, StringToClass } from "shared/inventory";
class InventoryClient {
	constructor() {
		this.initialize();
	}

	private async initialize() {
		Functions.createInventory();
		const slotCount = await Functions.getSlotCount.invoke();
		updateData({ slotCount });
	}

	public PickUp(slot: number, Item: new () => Item, Instance: Instance) {
		Functions.addItem.invoke(slot, Item, Instance);
	}

	public Drop(slot: number) {
		Functions.removeItem.invoke(slot);
	}

	public Use(slot: number) {
		Functions.useItem.invoke(slot);
	}

	public DeleteInventory() {
		Functions.deleteInventory();
		updateData({ slotCount: 0 });
	}
}

const Raycast = new RaycastHandler(false);
const inv = new InventoryClient();
const inputHandling = new InputHandle();

inputHandling.KeyEPressed.Connect(() => {
	const RaycastResult = Raycast.FireSingleRaycast();
	if (RaycastResult !== undefined) {
		if (RaycastResult.Instance.GetAttribute("Item") === true) {
			const data = getSelectedSlotData();
			if (data.iconImg === 0) {
				inv.PickUp(data.selectedIndex, StringToClass[RaycastResult.Instance.Name], RaycastResult.Instance);
			} else if (data.iconImg !== 0) {
				inv.Drop(data.selectedIndex);
			}
		}
	}
});

inputHandling.LeftMouseButtonPressed.Connect(() => {
	const data = getSelectedSlotData();
	if (data.iconImg !== 0) {
		inv.Use(data.selectedIndex);
	}
});
