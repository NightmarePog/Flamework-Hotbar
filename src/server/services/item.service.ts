const registeredItems = new Array<Item>();

import { Workspace } from "@rbxts/services";

class Item {
	public model: Model;
	public name: string;

	constructor(model: Model, name: string) {
		this.model = model;
		this.name = name;
	}
}

export function registerAllItems() {
	for (const descendant of Workspace.GetDescendants()) {
		if (descendant.IsA("Model")) {
			const itemAttribute = descendant.GetAttribute("Item");
			if (itemAttribute === true) {
				const item = new Item(descendant, descendant.Name);
				registeredItems.push(item);
			}
		}
	}
}
