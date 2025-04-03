import { any } from "@rbxts/react/src/prop-types";
import { InputHandle } from "./PickupInputHandling";
import { InventoryHandler } from "client/ui/inventory/components/InventoryHandler";
import images from "shared/images";

class InventoryClient {
	public PickUp() {}
	public Drop() {}
	public Use() {}
}

class Item {
	public sprites: string[]; // Pole řetězců (odkazy na obrázky)
}
