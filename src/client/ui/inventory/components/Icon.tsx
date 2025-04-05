import React, { useEffect, useRef } from "@rbxts/react";

interface IconProps {
	Image: string;
	Transparency: number;
}

export function Icon({ Image, Transparency }: IconProps) {
	const imageRef = useRef<ImageLabel | undefined>(undefined);

	useEffect(() => {
		if (imageRef.current) {
			imageRef.current.ImageTransparency = Transparency;
		}
	}, [Transparency]);

	return (
		<imagelabel
			ref={(el) => {
				if (el) {
					imageRef.current = el;
				}
			}}
			Image={Image}
			Size={new UDim2(0.5, 0, 0.5, 0)}
			Position={new UDim2(0.5, 0, 0.5, 0)}
			AnchorPoint={new Vector2(0.5, 0.5)}
			BackgroundTransparency={1}
			ImageTransparency={Transparency}
		/>
	);
}
