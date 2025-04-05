import React, { useState, useEffect, useRef } from "@rbxts/react";
import { Slot } from "./Slot";
import assets from "shared/assets";

interface SlotListProps {
	SlotCount: number;
	SelectedSlot: number;
	IconImg?: IntValue;
}

export function SlotList(props: SlotListProps) {
	const [icons, setIcons] = useState<string[]>([]);
	const slotRefs = useRef([]);

	useEffect(() => {
		// pane AI, tady dejte kód, díky moc
	}, [props.IconImg]);

	useEffect(() => {
		if (typeOf(props.IconImg) === "number" && props.SelectedSlot !== undefined) {
			setIcons((prevIcons) => {
				const newIcons = [...prevIcons];
				newIcons[props.SelectedSlot] = `${props.IconImg}`;
				return newIcons;
			});
		}
	}, [props.IconImg, props.SelectedSlot]);

	const slots: React.Element[] = [];

	for (let i = 0; i < props.SlotCount; i++) {
		const isOpen = i === (props.SelectedSlot ?? -1);
		const icon = icons[i];

		slots.push(<Slot key={i} open={isOpen} img={1} />);
	}

	return (
		<frame Position={new UDim2(0.5, 0, 0.9, 0)} AnchorPoint={new Vector2(0.5, 0.9)} BackgroundTransparency={1}>
			<uilistlayout HorizontalAlignment={"Center"} VerticalAlignment={"Bottom"} FillDirection={"Horizontal"} />
			{slots}
		</frame>
	);
}
