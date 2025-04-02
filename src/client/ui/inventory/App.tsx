// Created by Nightmarepogg
// Wrapper Component for all UI

import React from "@rbxts/react";
import { InventoryHandler } from "./components/InventoryHandler";
import { PickupDot } from "./components/PickupDot";

export function App() {
	return (
		<>
			<frame Transparency={1} Size={new UDim2(1, 0, 1, 0)}>
				<InventoryHandler />
			</frame>
			<frame Transparency={1} Size={new UDim2(1, 0, 1, 0)}>
				<PickupDot />
			</frame>
		</>
	);
}
