import { slotProps } from "./SlotProps";

export interface HotbarConsts {
	slotCountArray: number[];
	selectedSlot: undefined | number;
	UseRefs: React.MutableRefObject<boolean>[] | undefined;
}

export interface HotbarProps {
	slotCount: number;
}
