export interface ItemData {
	ID: number | undefined;
	Name: string | undefined;
	Description: string | undefined;
	Icons: string[] | [];
	Model: Instance | undefined;
}

export abstract class Item {
	readonly ID: number;
	readonly Name: string;
	readonly Description: string;
	readonly Icons: string[];
	readonly Model: Instance;

	constructor(id: number, name: string, description: string, Icons: string[], Model: Instance) {
		this.ID = id;
		this.Name = name;
		this.Description = description;
		this.Icons = Icons;
		this.Model = Model;
	}

	public abstract use(): void;

	public getInfo(): ItemData {
		const data: ItemData = {
			ID: this.ID,
			Name: this.Name,
			Description: this.Description,
			Icons: this.Icons,
			Model: this.Model,
		};
		return data;
	}
}
