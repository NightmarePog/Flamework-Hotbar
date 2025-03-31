import React from "@rbxts/react";
import { createPortal } from "@rbxts/react-roblox";
import { TestComponent } from "./TestComponent";

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

	return createPortal(<TestComponent />, screenGui); // Vložení do ScreenGui
}
