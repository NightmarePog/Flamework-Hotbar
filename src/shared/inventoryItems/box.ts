import { Item } from "shared/inventory";
import { items } from "./items";

const replicatedStorage = game.GetService("ReplicatedStorage");
const ItemsFolder = replicatedStorage.FindFirstChild("Items");

export class Box extends Item {
	constructor() {
		if (ItemsFolder && ItemsFolder.IsA("Folder")) {
			const model = ItemsFolder.FindFirstChild("Box");
			if (model && model.IsA("Model")) {
				super("Box", model, "Very cool box!");
				this.id = 2;
			}
		}
	}

	use(): void {
		print("dumbass, box has no use");
	}
}
