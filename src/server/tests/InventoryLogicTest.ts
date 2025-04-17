import { Players, ReplicatedStorage } from "@rbxts/services";
import { Inventory } from "server/logic/inventory/inventoryDatabase";
import TestApp from "shared/misc/TestApp";
import { ItemData } from "shared/types/items/Item";
import { PlaceholderItem } from "shared/types/items/PlaceholderItem";
import Images from "shared/assets/Items/placeholderItem";

const enabled = false;

if (enabled) {
	const Model: undefined | Instance = ReplicatedStorage.FindFirstChild("ItemModels")?.FindFirstChild("Box");
	const getSlotResult: ItemData[] = [
		{
			ID: 1,
			Name: "PlaceholderItem",
			Description: "I am just a placeholder Item, probably shouldn't be in game lol",
			Icons: Images,
			Model: Model,
		},
		{
			ID: 0,
			Name: "0",
			Description: "",
			Icons: ["0"],
			Model: undefined,
		},
		{
			ID: 0,
			Name: "0",
			Description: "",
			Icons: ["0"],
			Model: undefined,
		},
		{
			ID: 0,
			Name: "0",
			Description: "",
			Icons: ["0"],
			Model: undefined,
		},
		{
			ID: 0,
			Name: "0",
			Description: "",
			Icons: ["0"],
			Model: undefined,
		},
	];

	const testInventory = new Inventory(5);

	Players.ChildAdded.Connect((player) => {
		const testing = new TestApp("Testing Inventory logic system");
		testing.pushTest(() => testInventory.pickItem(0, PlaceholderItem), true, true);
		testing.pushTest(() => testInventory.getSlotItems(), getSlotResult, true);
		testing.runTests();
	});
}
