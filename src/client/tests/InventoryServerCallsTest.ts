import TestApp from "shared/misc/TestApp";
import { Functions } from "client/network";
import { ReplicatedStorage } from "@rbxts/services";
const Model: undefined | Instance = ReplicatedStorage.FindFirstChild("ItemModels")?.FindFirstChild("Box");

const enabled = false;

if (enabled) {
	if (Model) {
		const testing = new TestApp("Inventory service call test");
		Functions.pickUp(1, 1, Model).then((result) => {
			testing.pushTest(() => result, true, true);
			testing.runTests();
		});
	}
}
