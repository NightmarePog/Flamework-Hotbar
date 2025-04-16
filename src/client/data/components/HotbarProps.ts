import Signal from "@rbxts/signal";

export interface HotbarProps {
	slotCount: number;
	Images: (undefined | string)[] | undefined;
	OnChange: Signal<() => void>;
	SelectedSlot: number;
}

export const HotbarData: HotbarProps = {
	slotCount: 5,
	Images: [],
	OnChange: new Signal(),
	SelectedSlot: 1,
};
