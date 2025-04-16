import { number } from "@rbxts/react/src/prop-types";
import { HotbarData } from "client/data/components/HotbarProps";
import { slotConsts } from "client/data/components/SlotProps";

export class UIState {
	public getSelectedSlot(): number {
		const SelectedSlot = HotbarData.SelectedSlot;
		if (SelectedSlot !== undefined) {
			return SelectedSlot;
		} else {
			return 0;
		}
	}

	private getSlotFromParameter(slot: number): string {
		return HotbarData.Images[slot];
	}

	public setItemsInfo(...args: string[]) {
		if (args.size() <= HotbarData.slotCount) {
			HotbarData.Images = args;
			HotbarData.OnChange.Fire();
		}
	}

	public setOneSlot(image: string, slot: number) {
		const returnValue: string[] = [];
		if (slot <= HotbarData.slotCount) {
			for (let index = 0; index < slot; index++) {
				returnValue.push(this.getSlotFromParameter(index));
			}
			returnValue.push(image);
			for (let index = slot; index < HotbarData.slotCount; index++) {
				returnValue.push(this.getSlotFromParameter(index));
			}
			HotbarData.Images = returnValue;
			HotbarData.OnChange.Fire();
		}
	}
}
