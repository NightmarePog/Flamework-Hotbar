import { Item, ItemData } from "./Item";

export class Emptyslot extends Item {
	public use(): void {
		print("none?");
	}
	constructor() {
		super(0, "EmptySlot", "nil", [], undefined);
	}
	public getInfo(): ItemData {
		const data: ItemData = {
			ID: 0,
			Name: "0",
			Description: "",
			Icons: ["0"],
			Model: undefined,
		};
		return data;
	}
}
