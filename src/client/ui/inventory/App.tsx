// Created by Nightmarepogg
// Wrapper Component for all UI

import React, { useState } from "@rbxts/react";
import { InventoryHandler } from "./components/InventoryHandler";
import { PickupDot } from "./components/PickupDot";

interface InventoryHandlerData {
	slotCount: number;
	selectedIndex: number;
	iconImg: number;
}

let props: InventoryHandlerData = { slotCount: 0, selectedIndex: 0, iconImg: 0 };

export function App() {
	return (
		<>
			<frame Transparency={1} Size={new UDim2(1, 0, 1, 0)}>
				<InventoryHandler
					slotCount={props.slotCount}
					selectedIndex={props.selectedIndex}
					iconImg={props.iconImg}
				/>
			</frame>
			<frame Transparency={1} Size={new UDim2(1, 0, 1, 0)}>
				<PickupDot />
			</frame>
		</>
	);
}

export function updateData(newData: Partial<InventoryHandlerData>) {
	props = {
		...props,
		...newData,
	};
}

export function getSelectedSlotData() {
	return props;
}
