import array from "shared/misc/array";
import { HotbarData } from "client/data/components/HotbarProps";
import { InputHandler } from "client/events/InputHandling";
import Slot from "./Slot";
import React, { useEffect, useState } from "@rbxts/react";

const Hotbar = () => {
	const [selectedIndex, setSelectedIndex] = useState(0);
	const [images, setImages] = useState(HotbarData.Images ?? ["0", "0", "0", "0", "0"]);
	const inputHandler = new InputHandler();

	const slotCount = HotbarData.slotCount;

	useEffect(() => {
		const numberConnection = inputHandler.numberRowPressed.Connect((pressedNumber) => {
			const newIndex = math.clamp(pressedNumber, 0, slotCount - 1);
			if (newIndex !== selectedIndex) {
				HotbarData.SelectedSlot = newIndex;
				setSelectedIndex(newIndex);
			}
		});
		const imageConnection = HotbarData.OnChange.Connect(() => {
			const newImages = HotbarData.Images ?? [];
			setImages(newImages);
		});

		return () => {
			numberConnection.Disconnect();
			imageConnection.Disconnect();
		};
	}, [slotCount, selectedIndex]);

	return (
		<frame Position={new UDim2(0.5, 0, 0.9, 0)} AnchorPoint={new Vector2(0.5, 0.9)} BackgroundTransparency={1}>
			<uilistlayout HorizontalAlignment={"Center"} VerticalAlignment={"Bottom"} FillDirection={"Horizontal"} />

			{array(slotCount).map((_, index) => {
				const icon = images[index];
				return <Slot key={index} isSelected={index === selectedIndex} iconImage={icon ?? ""} />;
			})}
		</frame>
	);
};

export default Hotbar;
