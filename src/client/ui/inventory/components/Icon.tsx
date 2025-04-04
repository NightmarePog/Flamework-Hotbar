import React from "@rbxts/react";

interface IconProps {
	Image: string;
}

export function Icon({ Image }: IconProps) {
	return (
		<imagelabel
			Image={Image}
			Size={new UDim2(0, 64, 0, 64)}
			Position={new UDim2(0.5, 0, 0.5, 0)}
			AnchorPoint={new Vector2(0.5, 0.5)}
			BackgroundTransparency={1}
		/>
	);
}
