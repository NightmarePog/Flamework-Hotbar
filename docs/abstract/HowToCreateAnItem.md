# How to create an Item?
It's really simple!
## 1st create a model
First you need a model of your Item.
Simply create any model. It can be anything, only rule is that you need some **PrimaryPart**!
## 2nd add into item database 
Go into src/shared/types/items
Create a new file <yourItemName>.ts
and just create new Item according to this template:
```ts
import { Item } from "./Item";
import { ReplicatedStorage } from "@rbxts/services";
const Model: undefined | Instance = ReplicatedStorage.FindFirstChild("ItemModels")?.FindFirstChild("Box");

export class PlaceholderItem extends Item {
	constructor() {
		if (Model === undefined) {
			print("Error, model couldn't load");
			return;
		}
		super(<itemID>, "<ItemName>", "<ItemDescription>", <ItemImages>, <ItemModel>);
	}

	public use() {
		print("Item Used!");
	}
}
```
## 3rd almost finished!
give your model an ID attribute and tada! Everything should work!
