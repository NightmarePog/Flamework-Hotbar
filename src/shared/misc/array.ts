/**
 * Inputs number and returns Array
 *
 * @param {number} ArrayCount - Count of elements in Array
 * @returns {number[]} Array of numbers from input
 */

const array = (ArrayCount: number): number[] => {
	const Array: number[] = [];
	for (let i = 0; i < ArrayCount; i++) {
		Array.push(i);
	}
	return Array;
};

export default array;
