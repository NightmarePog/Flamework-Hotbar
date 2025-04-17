import { UIState } from "client/events/uiLocalState";
import assets = require("shared/assets/assets");
const enabled = false;

if (enabled) {
	print("Inventory testi is running!");
	delay(2, () => {
		const UIstateObject = new UIState();

		UIstateObject.setOneSlot(assets["UI/SlotPart.svg"], 1);
		print("test 1 done");
		wait(2);
		UIstateObject.setOneSlot(assets["UI/SlotPart.svg"], 4);
		print("test 2 done");
		wait(2);
		UIstateObject.setOneSlot(assets["UI/SlotPart.svg"], 0);
		print("test 3 done");
	});
}
