import { InputHandler } from "client/events/InputHandling";
import { RaycastHandler } from "client/events/itemRaycast";
import { UIState } from "client/events/uiLocalState";
import { Functions } from "client/network";
import { Item, ItemData } from "shared/types/items/Item";
import { getItemRegistry } from "shared/types/items/itemsRegistry";

class InventoryHandler {
	private InputHandle;
	private RaycastHandle;
	private UIstateHandle;
	constructor() {
		this.InputHandle = new InputHandler();
		this.RaycastHandle = new RaycastHandler(false);
		this.UIstateHandle = new UIState();

		this.InputHandle.KeyEPressed.Connect(() => {
			this.DropOrEquipPressed();
		});

		this.InputHandle.LeftMouseButtonPressed.Connect(() => {
			this.useItem();
		});
	}

	private DropOrEquipPressed(): undefined {
		const SelectedSlot = this.UIstateHandle.getSelectedSlot();
		if (SelectedSlot !== undefined) {
			Functions.getItemsInfo.invoke().then((data) => {
				print("info sent");
				if (data[SelectedSlot].ID === undefined) {
					print("it's empty");
					const raycastResult = this.RaycastHandle.FireSingleRaycast()?.Instance.Parent as Instance;
					if (raycastResult !== undefined) {
						const ResultAttribute = raycastResult?.GetAttribute("ItemID");
						print("raycast result:", raycastResult?.Name);
						print("raycastAttribute:", ResultAttribute);
						if (ResultAttribute !== undefined) {
							this.pickItem(raycastResult);
						}
					}
				} else if (data[SelectedSlot] !== undefined) {
					print("it's not empty");
					this.dropItem();
				}
			});
		}
	}

	private pickItem(item: Instance | undefined) {
		print("ppick up hell yea");
		if (item !== undefined) {
			print("item defined");
			const selectedSlot: number | undefined = this.UIstateHandle.getSelectedSlot();
			if (selectedSlot !== undefined) {
				print("slot defined");
				const itemID: number | undefined = item.GetAttribute("ItemID") as number;
				if (itemID !== undefined) {
					print("itemID defined");
					const itemClass = getItemRegistry(itemID);
					if (itemClass !== undefined) {
						print("itemClass defined");
						Functions.pickUp.invoke(selectedSlot, itemClass).then((success) => {
							print("no more go 3:");
							if (success) {
								print("sucess? ", success);
								Functions.getItemsInfo.invoke().then((itemData: ItemData[]) => {
									print("meow");
									itemData.forEach((SlotData, _) => {
										const Icon = SlotData.Icons[0];
										this.UIstateHandle.setItemsInfo(Icon, undefined);
									});
								});
							}
						});
					}
				}
			}
		}
	}

	private dropItem() {
		const selectedSlot: number | undefined = this.UIstateHandle.getSelectedSlot();
		if (selectedSlot !== undefined) {
			Functions.dropItem.invoke(selectedSlot).then((success) => {
				if (success) {
					// if success code
				}
			});
		}
	}

	private useItem() {}
}

new InventoryHandler();
