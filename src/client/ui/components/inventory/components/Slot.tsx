import React, { useEffect, useBinding } from "@rbxts/react";
import images from "shared/images";

interface SlotProps {
	open: boolean;
}

export function Slot({ open }: SlotProps) {
	const baseSize = 200;
	const maxSize = 200; // Velikost při otevření
	const minSize = 150; // Velikost při zavření
	const tweenTime = 0.5; // Délka animace v sekundách

	const [currentSize, setCurrentSize] = useBinding(baseSize);

	useEffect(() => {
		const TweenService = game.GetService("TweenService");
		const numberValue = new Instance("NumberValue");
		numberValue.Value = currentSize.getValue();

		const targetSize = open ? maxSize : minSize;

		// Vytvoření tweenu
		const tweenInfo = new TweenInfo(tweenTime, Enum.EasingStyle.Quad, Enum.EasingDirection.Out);
		const tween = TweenService.Create(numberValue, tweenInfo, { Value: targetSize });

		// Aktualizace velikosti během tweenu
		tween.Play();
		tween.Completed.Connect(() => {
			setCurrentSize(targetSize);
			numberValue.Destroy();
		});

		numberValue.Changed.Connect((newValue) => setCurrentSize(newValue));
	}, [open]);

	const cornerSize = 50;
	const cornerOffset = 20;
	const basePositions = [
		new UDim2(0, cornerOffset, 0, cornerOffset),
		new UDim2(1, -cornerOffset - cornerSize, 0, cornerOffset),
		new UDim2(1, -cornerOffset - cornerSize, 1, -cornerOffset - cornerSize),
		new UDim2(0, cornerOffset, 1, -cornerOffset - cornerSize),
	];

	return (
		<frame Transparency={1} Size={new UDim2(0, maxSize, 0, maxSize)}>
			<frame
				Size={currentSize.map((size) => new UDim2(0, size + 30, 0, size + 30))}
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
		</frame>
	);
}
