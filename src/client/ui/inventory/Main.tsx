import React, { StrictMode } from "@rbxts/react";
import { createRoot } from "@rbxts/react-roblox";
import { App } from "./App";

const player = game.GetService("Players").LocalPlayer;
const playerGui = player?.FindFirstChildOfClass("PlayerGui");

if (!playerGui) {
	warn("PlayerGui not found");
}

const screenGui = new Instance("ScreenGui");
screenGui.Parent = playerGui;

const root = createRoot(screenGui);
root.render(
	<StrictMode>
		<App />
	</StrictMode>,
);
