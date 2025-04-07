import { Item } from "shared/inventory";

export class Box extends Item {
	constructor() {
		super("Box", "Very cool box!");
		this.id = 2;
	}

	use(): void {
		print("dumbass, box has no use");
	}
}
