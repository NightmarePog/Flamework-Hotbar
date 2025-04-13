import array from "shared/misc/array";
import { HotbarProps } from "client/data/components/HotbarProps";
import { InputHandle } from "client/events/InputHandling";
import Slot from "./Slot";
import React, { useEffect, useState } from "@rbxts/react";

const Hotbar = ({ slotCount }: HotbarProps) => {
	const [selectedIndex, setSelectedIndex] = useState(0);
	const inputHandler = new InputHandle();

	useEffect(() => {
		const connection = inputHandler.numberRowPressed.Connect((pressedNumber) => {
			// Převod z 1-9 na 0-8
			const newIndex = math.clamp(pressedNumber, 0, slotCount);

			if (newIndex !== selectedIndex) {
				setSelectedIndex(newIndex);
				print(`Changed selected index to: ${newIndex}`);
			}
		});

		return () => connection.Disconnect();
	}, [slotCount, selectedIndex]);

	return (
		<frame Position={new UDim2(0.5, 0, 0.9, 0)} AnchorPoint={new Vector2(0.5, 0.9)} BackgroundTransparency={1}>
			<uilistlayout HorizontalAlignment={"Center"} VerticalAlignment={"Bottom"} FillDirection={"Horizontal"} />

			{array(slotCount).map((_, index) => (
				<Slot key={index} isSelected={index === selectedIndex} />
			))}
		</frame>
	);
};

export default Hotbar;
