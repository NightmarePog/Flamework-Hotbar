import Signal from "@rbxts/signal";

export interface HotbarProps {
	slotCount: number;
	Images: string[];
	OnChange: Signal<() => void>;
	SelectedSlot: number;
}

export const HotbarData: HotbarProps = {
	slotCount: 5,
	Images: [],
	OnChange: new Signal(),
	SelectedSlot: 0,
};
