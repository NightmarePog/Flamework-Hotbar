import { number } from "@rbxts/react/src/prop-types";
import { HotbarData } from "client/data/components/HotbarProps";

export class UIState {
	public getSelectedSlot(): number | undefined {
		const SelectedSlot = HotbarData.SelectedSlot;
		if (SelectedSlot !== undefined) {
			return SelectedSlot;
		} else {
			return undefined;
		}
	}

	public setItemsInfo(...args: (string | undefined)[]) {
		if (args.size() <= HotbarData.slotCount) {
			HotbarData.Images = args;
			HotbarData.OnChange.Fire();
		}
	}
}
