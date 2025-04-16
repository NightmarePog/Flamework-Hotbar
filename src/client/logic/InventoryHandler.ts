import { number } from "@rbxts/react/src/prop-types";
import { InputHandler } from "client/events/InputHandling";
import { RaycastHandler } from "client/events/itemRaycast";
import { UIState } from "client/events/uiLocalState";
import { Functions } from "@flamework/networking/out/functions/types";
import { Functions } from "client/network";

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
			Functions.
		}
	}

	private pickItem() {}

	private dropItem() {}

	private useItem() {}
}
