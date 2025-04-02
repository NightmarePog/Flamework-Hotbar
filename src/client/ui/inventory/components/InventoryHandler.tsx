import React from "@rbxts/react";
import { UserInputService } from "@rbxts/services";
import { SlotList } from "./SlotList";

const KEY_NUMBER_MAP: { [key: number]: number } = {
	49: 0, // 1
	50: 1, // 2
	51: 2, // 3
	52: 3, // 4
	53: 4, // 5
	54: 5, // 6
	55: 6, // 7
	56: 7, // 8
	57: 8, // 9
	48: 9, // 0
};

function useKeyboardSlotSelector(slotCount: number) {
	const [selectedIndex, setSelectedIndex] = React.useState(0);

	React.useEffect(() => {
		const handleInput = (input: InputObject) => {
			if (input.UserInputType !== Enum.UserInputType.Keyboard) return;

			const keyValue = input.KeyCode.Value;
			const mappedIndex = KEY_NUMBER_MAP[keyValue];

			if (mappedIndex !== undefined && mappedIndex < slotCount) {
				setSelectedIndex(mappedIndex);
			}
		};

		const connection = UserInputService.InputBegan.Connect(handleInput);
		return () => connection.Disconnect();
	}, [slotCount]);

	return selectedIndex;
}

export function InventoryHandler() {
	const slotCount = 4;
	const selectedIndex = useKeyboardSlotSelector(slotCount);

	return <SlotList SlotCount={slotCount} SelectedSlot={selectedIndex} />;
}
