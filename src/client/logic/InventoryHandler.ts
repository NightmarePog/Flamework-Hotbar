import { InputHandler } from "client/events/InputHandling";
import { RaycastHandler } from "client/events/itemRaycast";
import { UIState } from "client/events/uiLocalState";
import { Functions } from "client/network";
import Icon from "client/ui/inventory/components/hotbar/Icon";
import { ItemData } from "shared/types/items/Item";

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
		if (item !== undefined) {
			const selectedSlot: number | undefined = this.UIstateHandle.getSelectedSlot();
			if (selectedSlot !== undefined) {
				const itemID: number | undefined = item.GetAttribute("ItemID") as number;
				if (itemID !== undefined) {
					Functions.pickUp.invoke(selectedSlot, itemID).then((success) => {
						if (success) {
							print("sucess? ", success);
							Functions.getItemsInfo.invoke().then((itemData: ItemData[]) => {
								print("BLEH!");
								itemData.forEach((SlotData, index) => {
									const Icon = SlotData.Icons[1];
									print("-------------------INVENTORY HANDLER START--------------");
									print("itemdata is:", itemData);
									print("Icon is: ", Icon);
									print("slot data is:", SlotData);
									print("-------------------INVENTORY HANDLER END--------------");
									this.UIstateHandle.setOneSlot(Icon, index);
								});
							});
						}
					});
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
