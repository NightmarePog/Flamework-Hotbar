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
		print("slot count is:");
		print(numslotCount);
	}

	public PickUp(slot: number, Instance: Instance) {
		print("callid function");
		print(slot, Instance);
		Functions.addItem.invoke(slot, Instance);
		print("pick up!");
	}

	public Drop(slot: number) {
		Functions.removeItem.invoke(slot);
		print("drop!");
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
	print("E pressed!");
	const RaycastResult = Raycast.FireSingleRaycast();
	const data = getData();
	print("some data is:");
	print(data.iconImg);
	if (RaycastResult !== undefined) {
		if (RaycastResult.Instance.GetAttribute("Item") === true) {
			if (data.iconImg === 0) {
				print("selected slot is:");
				print(data.selectedIndex);
				inv.PickUp(data.selectedIndex, RaycastResult.Instance);
				updateData({ iconImg: 1 });
			}
		} else if (data.iconImg !== 0) {
			print("do i work?");
			inv.Drop(data.selectedIndex);
			updateData({ iconImg: 0 });
		}
	}
});

inputHandling.LeftMouseButtonPressed.Connect(() => {
	const data = getData();
	if (data.iconImg !== 0) {
		inv.Use(data.selectedIndex);
	}
});
