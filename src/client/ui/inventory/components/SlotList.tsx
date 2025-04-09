import React, { useState, useEffect } from "@rbxts/react";
import { Slot } from "./Slot";
import assets from "shared/assets";

interface SlotListProps {
	SlotCount: number;
	SelectedSlot: number;
	IconImg?: number;
}

class SlotData {
	public index: number;
	public isOpen: boolean;
	public img: number;

	constructor(index: number, isOpen = false, img = 0) {
		this.index = index;
		this.isOpen = isOpen;
		this.img = img;
	}

	updateImage(newImg: number) {
		this.img = newImg;
	}

	setOpen(state: boolean) {
		this.isOpen = state;
	}
}

export function SlotList(props: SlotListProps) {
	const [slots, setSlots] = useState<SlotData[]>([]);

	useEffect(() => {
		setSlots((prev) => {
			const newSlots: SlotData[] = [];

			for (let i = 0; i < props.SlotCount; i++) {
				const existing = prev[i];
				newSlots.push(new SlotData(i, false, existing ? existing.img : 0));
			}

			return newSlots;
		});
	}, [props.SlotCount]);

	useEffect(() => {
		setSlots((prev) => {
			return prev.map((slot, i) => {
				slot.setOpen(i === props.SelectedSlot);
				return slot;
			});
		});
	}, [props.SelectedSlot]);

	useEffect(() => {
		if (typeOf(props.IconImg) === "number" && props.SelectedSlot !== undefined) {
			setSlots((prevSlots) => {
				const updated = [...prevSlots];
				const slot = updated[props.SelectedSlot];
				if (slot) {
					slot.updateImage(props.IconImg as number);
				}
				return updated;
			});
		}
	}, [props.IconImg]);

	const renderedSlots = slots.map((slot) => <Slot key={slot.index} open={slot.isOpen} img={slot.img} />);

	return (
		<frame Position={new UDim2(0.5, 0, 0.9, 0)} AnchorPoint={new Vector2(0.5, 0.9)} BackgroundTransparency={1}>
			<uilistlayout HorizontalAlignment={"Center"} VerticalAlignment={"Bottom"} FillDirection={"Horizontal"} />
			{renderedSlots}
		</frame>
	);
}
