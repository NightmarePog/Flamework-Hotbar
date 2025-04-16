import Images from "shared/assets/Items/placeholderItem";
import { Item } from "./Item";
import { ReplicatedStorage } from "@rbxts/services";
const Model: undefined | Instance = ReplicatedStorage.FindFirstChild("ItemModels")?.FindFirstChild("Box");

export class PlaceholderItem extends Item {
	constructor() {
		if (Model === undefined) {
			print("Error, model couldn't load");
			return;
		}
		super(1, "PlaceholderItem", "I am just a placeholder Item, probably shouldn't be in game lol", Images, Model);
	}

	public use() {
		print("Item Used!");
	}
}
