import React, { useEffect, useState } from "@rbxts/react";
import IconProps from "client/data/components/IconProps";

const Icon = ({ Image }: IconProps) => {
	const [image, setImage] = useState("0");

	useEffect(() => {
		setImage(Image);
	}, [Image]);

	return (
		<imagelabel
			Image={image}
			Size={new UDim2(0.5, 0, 0.5, 0)}
			Position={new UDim2(0.5, 0, 0.5, 0)}
			AnchorPoint={new Vector2(0.5, 0.5)}
			BackgroundTransparency={1}
		/>
	);
};

export default Icon;
