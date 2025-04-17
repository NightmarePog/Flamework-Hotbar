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
		return HotbarData.Images[slot] ?? "0";
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
				print(index);
				returnValue.push(this.getSlotFromParameter(index));
				print(this.getSlotFromParameter(index));
			}
			returnValue.push(image);
			for (let index = slot + 1; index < HotbarData.slotCount; index++) {
				returnValue.push(this.getSlotFromParameter(index));
				print("this is second paramater and on the last test should end with 4", index);
			}
			HotbarData.Images = returnValue;
			print("returning u this: ", returnValue);
			HotbarData.OnChange.Fire();
		}
	}
}
