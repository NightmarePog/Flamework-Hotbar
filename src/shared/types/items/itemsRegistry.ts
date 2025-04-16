import { Item } from "./Item";
import { PlaceholderItem } from "./PlaceholderItem";

const itemRegistry = new Map<number, new () => Item>([[1, PlaceholderItem]]);

export const getItemRegistry = (ItemID: number): (new () => Item) | undefined => {
	print(itemRegistry);
	print("ID is:", ItemID);
	print("result is:", itemRegistry.get(ItemID));
	const result = itemRegistry.get(ItemID);

	if (result !== undefined) {
		return result;
	} else {
		return undefined;
	}
};
