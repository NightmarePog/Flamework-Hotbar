import { any } from "@rbxts/react/src/prop-types";
import { InputHandle } from "./PickupInputHandling";
import { InventoryHandler } from "client/ui/inventory/components/InventoryHandler";
import images from "shared/assets";

class InventoryClient {
	public PickUp() {}
	public Drop() {}
	public Use() {}
}

class Item {
	public sprites: string[] = [];
	public AnimationSpeed: number;

	constructor(sprites: string[], animationSpeed: number) {
		if (sprites === undefined) {
			this.loadSprite(false);
		} else {
			this.loadSprite(true, sprites);
		}
		this.AnimationSpeed = 1 / animationSpeed;
	}

	public loadSprite(HasIcon: boolean, IconList?: string[]) {
		if (HasIcon === true) {
			// TODO when asphalt get fixed add here real icon stuff lol
		} else {
			this.sprites = [images["SlotPart.png"], images["UI/SlotPart.svg"]];
		}
	}

	public AnimateSprite() {
		for (let i = 0; i < this.sprites.size(); i++) {
			task.wait(this.AnimationSpeed);
		}
	}
}
