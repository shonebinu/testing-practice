import analyzeArray from "../src/analyzeArray.js";

test("Basic analyzeArray functionality", () => {
	expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
		average: 4,
		min: 1,
		max: 8,
		length: 6,
	});
});

test("Empty array", () => {
	expect(analyzeArray([])).toEqual({
		average: null,
		min: null,
		max: null,
		length: 0,
	});
});
