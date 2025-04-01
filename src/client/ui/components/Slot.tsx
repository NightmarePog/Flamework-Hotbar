import React, { useBinding, useEffect } from "@rbxts/react";
import images from "shared/images";

interface SlotProps {}

export function Slot(_: SlotProps) {
	const baseSize = 200; // Základní velikost
	const sizeVariation = 50; // Rozsah zvětšení/zmenšení
	const [currentSize, setCurrentSize] = useBinding(baseSize);

	useEffect(() => {
		let time = 0;
		const connection = game.GetService("RunService").RenderStepped.Connect((dt) => {
			time += dt;
			// Sinusová animace velikosti
			const sizeOffset = math.sin(time * math.pi) * sizeVariation;
			setCurrentSize(baseSize + sizeOffset);
		});
		return () => connection.Disconnect();
	}, []);

	const cornerSize = 50;
	const cornerOffset = 20;
	const basePositions = [
		new UDim2(0, cornerOffset, 0, cornerOffset), // Top-Left
		new UDim2(1, -cornerOffset - cornerSize, 0, cornerOffset), // Top-Right
		new UDim2(1, -cornerOffset - cornerSize, 1, -cornerOffset - cornerSize), // Bottom-Right
		new UDim2(0, cornerOffset, 1, -cornerOffset - cornerSize), // Bottom-Left
	];

	return (
		<frame
			Size={currentSize.map((size) => new UDim2(0, size + 20, 0, size + 20))}
			Position={new UDim2(0.5, 0, 0.5, 0)}
			AnchorPoint={new Vector2(0.5, 0.5)}
			BackgroundTransparency={1}
		>
			{basePositions.map((position, index) => (
				<imagelabel
					key={index}
					Image={images["UI/SlotPart.svg"]}
					Size={new UDim2(0, cornerSize, 0, cornerSize)}
					Position={position}
					BackgroundTransparency={1}
					Rotation={90 * index}
				/>
			))}
		</frame>
	);
}
