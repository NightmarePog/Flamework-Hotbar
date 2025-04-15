import Images from "shared/assets/Items/placeholderItem";

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
}
