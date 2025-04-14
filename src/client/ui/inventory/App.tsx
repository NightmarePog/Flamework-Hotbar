// Created by Nightmarepogg
// Wrapper Component for all UI

import React from "@rbxts/react";
import Hotbar from "./components/hotbar/Hotbar";
import { PickupDot } from "./components/Cursor/Cursor";
import { InventoryProps } from "client/data/components/InventoryApp";

const props: InventoryProps = {
	slotCount: 5,
	selectedSlot: 0,
	slotIcons: [],
};

export function App() {
	return (
		<>
			<frame Transparency={1} Size={new UDim2(1, 0, 1, 0)}>
				<Hotbar slotCount={props.slotCount} />
			</frame>
			<frame Transparency={1} Size={new UDim2(1, 0, 1, 0)}>
				<PickupDot />
			</frame>
		</>
	);
}
