import TestApp from "shared/misc/TestApp";
import { Functions } from "client/network";

const enabled = false;

if (enabled) {
	const testing = new TestApp("Inventory service call test");
	Functions.pickUp(1, 1).then((result) => {
		testing.pushTest(() => result, true, true);
		testing.runTests();
	});
}
