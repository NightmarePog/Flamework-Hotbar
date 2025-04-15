import { HotbarData } from "../data/components/HotbarProps";
import assets = require("shared/assets");
const enabled = false;

if (enabled) {
	print("Inventory testi is running!");
	delay(2, () => {
		print("Setting up Images...");
		HotbarData.Images = [
			assets["UI/Items/Unknown/Unknown2.png"],
			assets["UI/Items/Unknown/Unknown1.png"],
			assets["UI/Items/Unknown/Unknown2.png"],
			assets["UI/Items/Unknown/Unknown2.png"],
			assets["UI/Items/Unknown/Unknown2.png"],
		];
		HotbarData.OnChange.Fire();

		task.wait(2);

		HotbarData.Images = [
			assets["UI/Items/Unknown/Unknown2.png"],
			undefined,
			assets["UI/Items/Unknown/Unknown2.png"],
			undefined,
			assets["UI/Items/Unknown/Unknown2.png"],
		];
		HotbarData.OnChange.Fire();

		task.wait(2);

		HotbarData.Images = [
			assets["UI/Items/Unknown/Unknown2.png"],
			undefined,
			assets["UI/Items/Unknown/Unknown2.png"],
			assets["SlotPart.png"],
			assets["UI/Items/Unknown/Unknown2.png"],
		];
		HotbarData.OnChange.Fire();
	});
}
