import React, { useEffect, useState } from "@rbxts/react";
import { SlotList } from "./SlotList";

interface InventoryHandlerData {
	slotCount: number;
	selectedIndex: number;
	iconImg: number;
}

export function InventoryHandler({ slotCount, selectedIndex, iconImg }: InventoryHandlerData) {
	const [iconImgState, setIconImg] = useState<number>(iconImg);

	return (
		<frame Size={UDim2.fromScale(1, 1)} BackgroundTransparency={1}>
			<SlotList SlotCount={slotCount} SelectedSlot={selectedIndex} IconImg={iconImgState} />
		</frame>
	);
}
