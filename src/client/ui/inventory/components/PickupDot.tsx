import React, { useEffect, useRef, useState } from "@rbxts/react";
import { RaycastHandler } from "client/components/pickup";
import { TweenService } from "@rbxts/services";

export function PickupDot() {
	const frameRef = useRef<Frame>();
	const raycastHandler = new RaycastHandler(false);

	// Funkce pro animaci velikosti frame
	const tweenFrameSize = (newSize: UDim2) => {
		if (!frameRef.current) return;

		const tweenInfo = new TweenInfo(0.5, Enum.EasingStyle.Quad, Enum.EasingDirection.Out);
		const tween = TweenService.Create(frameRef.current, tweenInfo, { Size: newSize });
		tween.Play();
	};

	useEffect(() => {
		// Připojení k eventu, když se zasáhne objekt s atributem Item: true
		const connection = raycastHandler.onItemHit.Connect((hitInstance: Instance) => {
			if (hitInstance.GetAttribute("Item") === true) {
				tweenFrameSize(new UDim2(0, 15, 0, 15)); // Zvětšení
			} else {
				tweenFrameSize(new UDim2(0, 10, 0, 10)); // Zmenšení
			}
		});

		return () => {
			// Odpojení eventu při zničení komponenty
			connection.Disconnect();
		};
	}, []);

	return (
		<frame
			ref={frameRef}
			Size={new UDim2(0, 10, 0, 10)}
			Position={new UDim2(0.5, 0, 0.5, 0)}
			BackgroundColor3={Color3.fromRGB(255, 255, 255)}
			AnchorPoint={new Vector2(0.5, 0.5)}
		>
			<uicorner CornerRadius={new UDim(1, 0)} />
		</frame>
	);
}
