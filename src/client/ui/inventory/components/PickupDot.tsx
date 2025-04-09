// Created by Nightmarepogg
// Cursor Component basically

import React, { useEffect, useRef, useState } from "@rbxts/react";
import { RaycastHandler } from "client/components/itemRaycast";
import { Players, TweenService, RunService, UserInputService } from "@rbxts/services";

export function PickupDot() {
	UserInputService.MouseIconEnabled = false;
	const frameRef = useRef<Frame>();
	const [mousePos, setMousePos] = useState(new UDim2(0, 0, 0, 0));
	const raycastHandler = new RaycastHandler(false);
	const player = Players.LocalPlayer;
	const mouse = player.GetMouse();

	const tweenFrameSize = (newSize: UDim2) => {
		if (!frameRef.current) return;

		const tweenInfo = new TweenInfo(0.2, Enum.EasingStyle.Quad, Enum.EasingDirection.Out);
		const tween = TweenService.Create(frameRef.current, tweenInfo, { Size: newSize });
		tween.Play();
	};

	useEffect(() => {
		const connection = raycastHandler.onItemHit.Connect((hitInstance: Instance) => {
			if (hitInstance.GetAttribute("Item") === true) {
				tweenFrameSize(new UDim2(0, 15, 0, 15));
			} else {
				tweenFrameSize(new UDim2(0, 5, 0, 5));
			}
		});

		const updateMousePos = () => {
			setMousePos(new UDim2(0, mouse.X, 0, mouse.Y));
		};

		const renderConnection = RunService.RenderStepped.Connect(updateMousePos);

		return () => {
			connection.Disconnect();
			renderConnection.Disconnect();
		};
	}, []);

	return (
		<frame
			ref={frameRef}
			Size={new UDim2(0, 5, 0, 5)}
			Position={mousePos}
			BackgroundColor3={Color3.fromRGB(255, 255, 255)}
			AnchorPoint={new Vector2(0.5, 0.5)}
		>
			<uicorner CornerRadius={new UDim(1, 0)} />
		</frame>
	);
}
