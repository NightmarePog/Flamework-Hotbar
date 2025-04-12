import { InputHandle } from "./InputHandling";
import { RaycastHandler } from "./itemRaycast";
import { Functions } from "client/network";
import { updateData, getData } from "client/ui/inventory/App";

class InventoryClient {
	constructor() {
		this.initialize();
	}

	private async initialize() {
		Functions.createInventory();
		const numslotCount = await Functions.getSlotCount.invoke();
		updateData({ slotCount: 5 });
	}

	public PickUp(slot: number, Instance: Instance) {
		Functions.addItem.invoke(slot, Instance);
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
	const data = getData();
	if (RaycastResult !== undefined) {
		const parentInstance = RaycastResult.Instance.Parent;
		if (parentInstance && parentInstance.IsA("Model")) {
			if (parentInstance.GetAttribute("Item") === true) {
				if (data.iconImg === 0) {
					inv.PickUp(data.selectedIndex, parentInstance);
					updateData({ iconImg: 1 });
				}
			} else if (data.iconImg !== 0) {
				inv.Drop(data.selectedIndex);
				updateData({ iconImg: 0 });
			}
		}
	}
});

inputHandling.LeftMouseButtonPressed.Connect(() => {
	const data = getData();
	if (data.iconImg !== 0) {
		inv.Use(data.selectedIndex);
	}
});
