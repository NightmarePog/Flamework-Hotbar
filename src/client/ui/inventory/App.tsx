// Created by Nightmarepogg
// Wrapper Component for all UI

import React, { useEffect, useRef, useState } from "@rbxts/react";
import { InventoryHandler } from "./components/InventoryHandler";
import { PickupDot } from "./components/Cursor/Cursor";
import { UserInputService } from "@rbxts/services";

interface InventoryHandlerData {
	slotCount: number;
	selectedIndex: number;
	iconImg: number;
}

const currentData: InventoryHandlerData = {
	slotCount: 0,
	selectedIndex: 99,
	iconImg: 0,
};

let globalSetters: {
	setSlotCount?: (n: number) => void;
	setSelectedIndex?: (n: number) => void;
	setIconImg?: (n: number) => void;
} = {};

export function App() {
	const [slotCount, setSlotCount] = useState(0);
	const [selectedIndex, setSelectedIndex] = useState(99);
	const [iconImg, setIconImg] = useState(0);

	useEffect(() => {
		currentData.slotCount = slotCount;
	}, [slotCount]);

	useEffect(() => {
		currentData.selectedIndex = selectedIndex;
	}, [selectedIndex]);

	useEffect(() => {
		currentData.iconImg = iconImg;
	}, [iconImg]);

	useEffect(() => {
		const conn = UserInputService.InputBegan.Connect((input) => {
			if (input.UserInputType === Enum.UserInputType.Keyboard) {
				const index = input.KeyCode.Value - 49;
				if (index >= 0 && index < slotCount) {
					setSelectedIndex(index);
				}
			}
		});
		return () => conn.Disconnect();
	}, [slotCount]);

	useEffect(() => {
		globalSetters = {
			setSlotCount,
			setSelectedIndex,
			setIconImg,
		};
	}, []);

	return (
		<>
			<frame Transparency={1} Size={new UDim2(1, 0, 1, 0)}>
				<InventoryHandler slotCount={slotCount} selectedIndex={selectedIndex} iconImg={iconImg} />
			</frame>
			<frame Transparency={1} Size={new UDim2(1, 0, 1, 0)}>
				<PickupDot />
			</frame>
		</>
	);
}

export function updateData(newData: Partial<InventoryHandlerData>) {
	if (newData.slotCount !== undefined) globalSetters.setSlotCount?.(newData.slotCount);
	if (newData.selectedIndex !== undefined) globalSetters.setSelectedIndex?.(newData.selectedIndex);
	if (newData.iconImg !== undefined) globalSetters.setIconImg?.(newData.iconImg);
}

export function getData(): InventoryHandlerData {
	return { ...currentData };
}
