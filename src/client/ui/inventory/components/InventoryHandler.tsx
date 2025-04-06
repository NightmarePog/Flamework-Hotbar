import React, { useEffect, useState } from "@rbxts/react";
import { SlotList } from "./SlotList";
import { UserInputService } from "@rbxts/services";

export function InventoryHandler() {
	const slotCount = 5;
	const [selectedIndex, setSelectedIndex] = useState(0);
	const [iconImg, setIconImg] = useState<number>(0);

	// ⌨️ Klávesová volba slotu
	useEffect(() => {
		const conn = UserInputService.InputBegan.Connect((input) => {
			if (input.UserInputType === Enum.UserInputType.Keyboard) {
				const index = input.KeyCode.Value - 49;
				if (index >= 0 && index < slotCount) {
					setSelectedIndex(index);
				}
			}
		});
		return () => conn.Disconnect();
	}, []);

	return (
		<frame Size={UDim2.fromScale(1, 1)} BackgroundTransparency={1}>
			<SlotList SlotCount={slotCount} SelectedSlot={selectedIndex} IconImg={iconImg} />
		</frame>
	);
}
