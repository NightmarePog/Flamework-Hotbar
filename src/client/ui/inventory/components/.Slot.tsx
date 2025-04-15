import React, { useEffect, useRef } from "@rbxts/react";
import assets from "shared/assets";
import { Icon } from "./Icon";

interface SlotProps {
	open: boolean;
	img: number;
}

export function Slot({ open, img }: SlotProps) {
	const images = ["0", assets["SlotPart.png"], assets["UI/SlotPart.svg"]];
	const maxSize = 150;
	const minSize = 100;
	const tweenTime = 0.5;
	const sizeOffset = 30;
	let Transparency = 1;

	const innerFrameRef = useRef<Frame>();
	const currentTween = useRef<Tween>();

	useEffect(() => {
		Transparency = 0;
	}, [img]);

	useEffect(() => {
		const innerFrame = innerFrameRef.current;
		if (!innerFrame) return;

		currentTween.current?.Cancel();
		const targetSize = open ? maxSize + sizeOffset : minSize + sizeOffset;
		const tweenService = game.GetService("TweenService");
		const tweenInfo = new TweenInfo(tweenTime, Enum.EasingStyle.Quad, Enum.EasingDirection.Out);
		const tween = tweenService.Create(innerFrame, tweenInfo, {
			Size: new UDim2(0, targetSize, 0, targetSize),
		});

		currentTween.current = tween;
		tween.Play();

		return () => {
			tween.Cancel();
		};
	}, [open]);

	const cornerSize = 25;
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
				ref={innerFrameRef}
				Size={new UDim2(0, minSize + sizeOffset, 0, minSize + sizeOffset)} // Inicializace velikosti na minSize
				Position={new UDim2(0.5, 0, 0.5, 0)}
				AnchorPoint={new Vector2(0.5, 0.5)}
				BackgroundTransparency={1}
			>
				{basePositions.map((position, index) => (
					<imagelabel
						key={index}
						Image={assets["UI/SlotPart.svg"]}
						Size={new UDim2(0, cornerSize, 0, cornerSize)}
						Position={position}
						BackgroundTransparency={1}
						Rotation={90 * index}
						ImageColor3={new Color3(229, 229, 229)}
					/>
				))}
				{images.map((imgg, index: number) => (
					<Icon key={index} Image={imgg} Transparency={index === img ? 0 : 1} />
				))}
			</frame>
		</frame>
	);
}
