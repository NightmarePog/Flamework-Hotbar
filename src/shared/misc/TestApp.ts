// simple test app
// TODO: make it so it can compare tables correctly somehow

const divider = "---------------------";
const smallDivider = "------------";

interface SingleTest {
	testingFunction: () => unknown;
	resultOfFunction: unknown;
	isCritical: boolean;
}

interface statistics {
	sucessful: number;
	failed: number;
	skipped: number;
}

class TestApp {
	private testName: string;
	private Tests: SingleTest[] = [];
	constructor(testName: string) {
		this.testName = testName;
	}

	public pushTest(inputFunction: () => unknown, returnValue: unknown, essential: boolean) {
		const test: SingleTest = {
			testingFunction: inputFunction,
			resultOfFunction: returnValue,
			isCritical: essential,
		};
		this.Tests.push(test);
	}

	public runTests() {
		const testsStatistics: statistics = { sucessful: 0, failed: 0, skipped: 0 };
		const essentialCount = this.Tests.filter((test) => test.isCritical).size();
		let SkipOthers = false;

		print("Running test called:", this.testName);
		print(divider);
		print("INFO:");
		print("number of tests: ", this.Tests.size());
		print("Essential tests:", essentialCount);
		print(divider);
		print("TESTS:");

		this.Tests.map((_, index) => {
			if (SkipOthers) {
				return;
			}
			const startTime: number = os.clock();
			print(smallDivider, "#" + index, smallDivider);
			const result = this.singleTest(index);
			if (result[0] === true) {
				print("Test was sucessful!");
				testsStatistics.sucessful = testsStatistics.sucessful + 1;
				const endTime: number = os.clock();
				print("at: ", 1000 * (endTime - startTime) + "ms");
			} else {
				const endTime: number = os.clock();
				print("Test Failed at: ", 1000 * (endTime - startTime) + "ms");
				print("EXPECTED:");
				print(this.Tests[index].resultOfFunction);
				print("GOT:");
				print(result[1]);
				testsStatistics.failed = testsStatistics.failed + 1;
				if (this.Tests[index].isCritical === true) {
					testsStatistics.skipped = this.Tests.size() - (index + 1);
					SkipOthers = true;
				}
			}
		});
		print(smallDivider, " TESTS FINISHED ", smallDivider);
		print(
			" failed: ",
			testsStatistics.failed,
			" success: ",
			testsStatistics.sucessful,
			" skipped: ",
			testsStatistics.skipped,
		);
	}

	private singleTest(ID: number) {
		const result = this.Tests[ID].testingFunction();
		return [result === this.Tests[ID].resultOfFunction, result];
	}
}

export default TestApp;
