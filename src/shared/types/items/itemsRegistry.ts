import { Item } from "./Item";
import { PlaceholderItem } from "./PlaceholderItem";

const itemRegistry = new Map<number, new () => Item>([[1, PlaceholderItem]]);

export const getItemRegistry = (ItemID: number): (new () => Item) | undefined => {
	const result = itemRegistry.get(ItemID);

	if (result !== undefined) {
		return result;
	} else {
		return undefined;
	}
};
