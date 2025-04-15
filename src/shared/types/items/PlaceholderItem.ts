import Images from "shared/assets/Items/placeholderItem";
import { Item } from "./Item";

class PlaceholderItem extends Item {
	constructor() {
		super(1, "PlaceholderItem", "I am just a placeholder Item, probably shouldn't be in game lol", Images);
	}

	public use() {
		print("Item Used!");
	}
}
