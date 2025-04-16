import Images from "shared/assets/Items/placeholderItem";

export interface ItemData {
	ID: number | undefined;
	Name: string | undefined;
	Description: string | undefined;
	Icons: string[] | [];
}

export abstract class Item {
	readonly ID: number;
	readonly Name: string;
	readonly Description: string;
	readonly Icons: string[];

	constructor(id: number, name: string, description: string, Icons: string[]) {
		this.ID = id;
		this.Name = name;
		this.Description = description;
		this.Icons = Icons;
	}

	public abstract use(): void;

	public getInfo(): ItemData {
		const data: ItemData = {
			ID: this.ID,
			Name: this.Name,
			Description: this.Description,
			Icons: this.Icons,
		};
		return data;
	}
}
