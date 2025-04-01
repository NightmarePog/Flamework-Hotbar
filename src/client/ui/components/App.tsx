import React from "@rbxts/react";
import { createPortal } from "@rbxts/react-roblox";
import { Slot } from "./Slot";

const player = game.GetService("Players").LocalPlayer;
const playerGui = player?.FindFirstChildOfClass("PlayerGui");

export function App() {
	if (!playerGui) {
		warn("PlayerGui not found");
		return undefined;
	}

	// Vytvoření ScreenGui a přidání do PlayerGui
	const screenGui = new Instance("ScreenGui");
	screenGui.Parent = playerGui;

	return createPortal(<Slot />, screenGui); // Vložení do ScreenGui
}
