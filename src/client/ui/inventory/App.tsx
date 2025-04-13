// Created by Nightmarepogg
// Wrapper Component for all UI

import React from "@rbxts/react";
import Hotbar from "./components/hotbar/Hotbar";
import { PickupDot } from "./components/Cursor/Cursor";

export function App() {
	return (
		<>
			<frame Transparency={1} Size={new UDim2(1, 0, 1, 0)}>
				<Hotbar slotCount={5} />
			</frame>
			<frame Transparency={1} Size={new UDim2(1, 0, 1, 0)}>
				<PickupDot />
			</frame>
		</>
	);
}
