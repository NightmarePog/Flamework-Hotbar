import React from "@rbxts/react";
import { createPortal } from "@rbxts/react-roblox";
import { SlotTab } from "./components/SlotTab";

const player = game.GetService("Players").LocalPlayer;
const playerGui = player?.FindFirstChildOfClass("PlayerGui");

export function App() {
	if (!playerGui) {
		warn("PlayerGui not found");
		return undefined;
	}

	const screenGui = new Instance("ScreenGui");
	screenGui.Parent = playerGui;

	return createPortal(<SlotTab MakeSlots={3} />, screenGui);
}
