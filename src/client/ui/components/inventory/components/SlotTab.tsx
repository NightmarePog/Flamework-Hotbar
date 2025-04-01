import { makeHello } from "shared/module";
import { Slot } from "./Slot";
import React, { useState, useEffect } from "@rbxts/react";

interface SlotTabProps {
	open?: number;
	MakeSlots: number;
}

export function SlotTab({ open, MakeSlots }: SlotTabProps) {
	const initialStates: boolean[] = [];
	for (let i = 0; i < MakeSlots; i++) {
		initialStates.push(false);
	}
	const [isOpenStates, setIsOpenStates] = useState(initialStates);

	useEffect(() => {
		if (open !== undefined && open >= 0 && open < isOpenStates.size()) {
			setIsOpenStates((prevStates) => {
				const newStates = prevStates.map((_, i) => i === open);
				return newStates;
			});
		}
	}, [open, isOpenStates.size()]);

	return (
		<>
			{isOpenStates.map((isOpen, index) => (
				<Slot key={index} open={isOpen} />
			))}

			<uilistlayout FillDirection={"Horizontal"} HorizontalAlignment={"Center"} />
		</>
	);
}
