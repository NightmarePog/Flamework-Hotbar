import { UIState } from "client/events/uiLocalState";
import assets from "shared/assets/assets";

const enabled = false;

if (enabled) {
	const UIStateObj = new UIState();
	print("Currectly selected slot is:", UIStateObj.getSelectedSlot());
	delay(2, () => {
		print("testing icons...");
		UIStateObj.setItemsInfo(assets["SlotPart.png"], "0", assets["UI/Items/Unknown/Unknown3.png"]);
		task.wait(2);
		UIStateObj.setItemsInfo(
			assets["SlotPart.png"],
			assets["UI/Items/Unknown/Unknown3.png"],
			"0",
			assets["SlotPart.png"],
		);
	});
}
