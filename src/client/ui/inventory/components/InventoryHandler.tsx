import React, { useEffect, useState } from "@rbxts/react";
import { SlotList } from "./SlotList";
import { UserInputService } from "@rbxts/services";

interface InventoryHandlerData {
	slotCount: number;
	selectedIndex: number;
	iconImg: number;
}

export function InventoryHandler({ slotCount, selectedIndex, iconImg }: InventoryHandlerData) {
	const [selectedIndexState, setSelectedIndex] = useState<number>(selectedIndex);
	const [iconImgState, setIconImg] = useState<number>(iconImg);

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
	}, [slotCount]);

	return (
		<frame Size={UDim2.fromScale(1, 1)} BackgroundTransparency={1}>
			<SlotList SlotCount={slotCount} SelectedSlot={selectedIndexState} IconImg={iconImgState} />
		</frame>
	);
}
