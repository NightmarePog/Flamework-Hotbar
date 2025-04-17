import TestApp from "shared/misc/TestApp";

const enabled = false;

function add(a: number, b: number) {
	return a + b;
}

function divide(a: number, b: number) {
	return a * b; // this is purposely wrong
}

if (enabled) {
	const tests = new TestApp("Test of the Test App");
	tests.pushTest(() => add(2, 3), 5, true);
	tests.pushTest(() => divide(4, 2), 2, false);
	tests.pushTest(() => add(1, 2), 5, true);
	tests.pushTest(() => add(2, 2), 5, true);
	tests.runTests();
}
