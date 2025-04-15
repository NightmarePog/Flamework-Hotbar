import React, { useEffect, useRef } from "@rbxts/react";
import { slotConsts, slotProps } from "client/data/components/SlotProps";
import assets from "shared/assets";
import Icon from "./Icon";

interface ExtendedSlotProps extends slotProps {
	iconImage: string;
}

const Slot = ({ isSelected, iconImage }: ExtendedSlotProps) => {
	const innerFrameRef = useRef<Frame>();
	const currentTween = useRef<Tween>();

	useEffect(() => {
		const innerFrame = innerFrameRef.current;
		if (!innerFrame) return;

		currentTween.current?.Cancel();

		const targetSize = isSelected
			? slotConsts.maxSize + slotConsts.sizeOffset
			: slotConsts.minSize + slotConsts.sizeOffset;

		const tweenService = game.GetService("TweenService");
		const tweenInfo = new TweenInfo(slotConsts.tweenTime, Enum.EasingStyle.Quad, Enum.EasingDirection.Out);

		const tween = tweenService.Create(innerFrame, tweenInfo, {
			Size: new UDim2(0, targetSize, 0, targetSize),
		});

		currentTween.current = tween;
		tween.Play();

		return () => {
			if (tween.PlaybackState !== Enum.PlaybackState.Completed) {
				tween.Cancel();
			}
		};
	}, [isSelected]);

	return (
		<frame BackgroundTransparency={1} Size={new UDim2(0, slotConsts.maxSize, 0, slotConsts.maxSize)}>
			<frame
				ref={innerFrameRef}
				Size={
					new UDim2(
						0,
						slotConsts.minSize + slotConsts.sizeOffset,
						0,
						slotConsts.minSize + slotConsts.sizeOffset,
					)
				}
				Position={new UDim2(0.5, 0, 0.5, 0)}
				AnchorPoint={new Vector2(0.5, 0.5)}
				BackgroundTransparency={1}
			>
				{slotConsts.basePositions.map((position, index) => (
					<imagelabel
						key={`corner_${index}`}
						Image={assets["UI/SlotPart.svg"] as string}
						Size={new UDim2(0, slotConsts.cornerSize, 0, slotConsts.cornerSize)}
						Position={position}
						BackgroundTransparency={1}
						Rotation={90 * index}
						ImageColor3={new Color3(229, 229, 229)}
					/>
				))}
				<Icon Image={iconImage} />
			</frame>
		</frame>
	);
};

export default Slot;
