import { ItemData } from "./Item";

export class Emptyslot {
	public getInfo(): ItemData {
		const data: ItemData = {
			ID: undefined,
			Name: undefined,
			Description: undefined,
			Icons: [],
		};
		return data;
	}
}
