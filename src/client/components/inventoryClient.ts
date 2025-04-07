import { any } from "@rbxts/react/src/prop-types";
import { InputHandle } from "./PickupInputHandling";
import { InventoryHandler } from "client/ui/inventory/components/InventoryHandler";
import assets from "shared/assets";

class InventoryClient {
	constructor() {}
	public PickUp() {}
	public Drop() {}
	public Use() {}
}

class Item {
	public sprites: string[];

	constructor() {
		this.sprites = [];
	}
}
