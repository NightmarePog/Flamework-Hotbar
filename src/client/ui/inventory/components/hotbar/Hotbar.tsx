import array from "shared/misc/array";
import { HotbarData } from "client/data/components/HotbarProps";
import { InputHandler } from "client/events/InputHandling";
import Slot from "./Slot";
import React, { useEffect, useState } from "@rbxts/react";

const Hotbar = () => {
	const [selectedIndex, setSelectedIndex] = useState(0);
	const [images, setImages] = useState(HotbarData.Images ?? []);
	const inputHandler = new InputHandler();

	const slotCount = HotbarData.slotCount;

	useEffect(() => {
		print("Hotbar mounted. Initial images:", images);

		const numberConnection = inputHandler.numberRowPressed.Connect((pressedNumber) => {
			const newIndex = math.clamp(pressedNumber, 0, slotCount - 1);
			if (newIndex !== selectedIndex) {
				HotbarData.SelectedSlot = newIndex;
				setSelectedIndex(newIndex);
				print(`Changed selected index to: ${newIndex}`);
			}
		});
		const imageConnection = HotbarData.OnChange.Connect(() => {
			print("what the sigma");
			const newImages = HotbarData.Images ?? [];
			print("Received HotbarData.OnChange. Updating images to:", newImages);
			setImages(newImages);
		});

		return () => {
			numberConnection.Disconnect();
			imageConnection.Disconnect();
			print("Hotbar unmounted.");
		};
	}, [slotCount, selectedIndex]);

	return (
		<frame Position={new UDim2(0.5, 0, 0.9, 0)} AnchorPoint={new Vector2(0.5, 0.9)} BackgroundTransparency={1}>
			<uilistlayout HorizontalAlignment={"Center"} VerticalAlignment={"Bottom"} FillDirection={"Horizontal"} />

			{array(slotCount).map((_, index) => {
				const icon = images[index];
				print(`Rendering Slot ${index} with image:`, icon);
				return <Slot key={index} isSelected={index === selectedIndex} iconImage={icon ?? ""} />;
			})}
		</frame>
	);
};

export default Hotbar;
