import array from "shared/misc/array";
import { HotbarProps, HotbarConsts } from "client/data/components/HotbarProps";
import Slot from "./Slot";
import React, { useRef } from "@rbxts/react";
import { InputHandle } from "client/events/InputHandling";

const Hotbar = ({ slotCount }: HotbarProps) => {
	const inputHandler = new InputHandle();
	const ref = useRef(false);
	const data: HotbarConsts = {
		slotCountArray: array(slotCount),
	};
	array(slotCount).map((_, index) => {
		data.slots?.push(Slot({ key: index, isSelected: false }));
	});
	inputHandler.numberRowPressed; // TODO user numpad input

	return data.slotCountArray.map((_, index) => {
		{
			data.slots;
		}
	});
};
