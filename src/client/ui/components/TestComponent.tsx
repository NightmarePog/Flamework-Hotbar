import React from "@rbxts/react";

export function TestComponent() {
	return (
		<frame
			Size={new UDim2(0, 200, 0, 100)}
			Position={new UDim2(0, 0, 0, 0)}
			BackgroundColor3={Color3.fromRGB(255, 0, 0)}
		>
			<textlabel
				Size={new UDim2(0, 20, 0, 400)}
				Text="Hello, Roblox!"
				TextColor3={Color3.fromRGB(255, 255, 255)}
				BackgroundTransparency={1}
				TextScaled
			/>
		</frame>
	);
}
