import React from "@rbxts/react";
import { Slot } from "./Slot";

interface SlotListProps {
	SlotCount: number;
	SelectedSlot?: number;
}

export function SlotList(props: SlotListProps) {
	const slots: React.Element[] = [];

	for (let i = 0; i < props.SlotCount; i++) {
		const isOpen = i === (props.SelectedSlot ?? -1);

		slots.push(<Slot key={i} open={isOpen} />);
	}

	return (
		<>
			<uilistlayout HorizontalAlignment={"Center"} VerticalAlignment={"Bottom"} FillDirection={"Horizontal"} />
			{slots}
		</>
	);
}
