// Created by Nightmarepogg
// Component for handling multiple slots in row

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
		<frame Position={new UDim2(0.5, 0, 0.9, 0)}>
			<uilistlayout HorizontalAlignment={"Center"} VerticalAlignment={"Bottom"} FillDirection={"Horizontal"} />
			{slots}
		</frame>
	);
}
