import React, { StrictMode } from "@rbxts/react";
import { createRoot } from "@rbxts/react-roblox";
import { App } from "./App";

const root = createRoot(new Instance("Folder"));
root.render(
	<StrictMode>
		<App />
	</StrictMode>,
);
