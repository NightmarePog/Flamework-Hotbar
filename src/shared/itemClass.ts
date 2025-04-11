export class Item {
	public id: number;
	private name: string;
	private model: Model;
	private description?: string;

	constructor(name: string, model: Model, description: string) {
		this.id = 1;
		this.name = name;
		this.model = model;
		this.description = description;
	}
	use(): void {
		print(`${this.name} used!`);
	}

	getInfo() {
		return {
			id: this.id,
			name: this.name,
			description: this.description,
			model: this.model,
		};
	}
}
