import Signal from "@rbxts/signal";

export interface HotbarConsts {
	slotCountArray: number[];
	selectedSlot: undefined | number;
	UseRefs: React.MutableRefObject<boolean>[] | undefined;
}

export interface HotbarProps {
	slotCount: number;
	Images: (undefined | string)[] | undefined;
	OnChange: Signal<() => void>;
}

export const HotbarData: HotbarProps = {
	slotCount: 5,
	Images: [],
	OnChange: new Signal(),
};
