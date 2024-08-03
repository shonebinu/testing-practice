import reverseString from "../src/reverseString.js";

test("Basic String", () => {
	expect(reverseString("name")).toBe("eman");
	expect(reverseString("name ")).toBe(" eman");
	expect(reverseString("name last")).toBe("tsal eman");
});

test("Single Character", () => {
	expect(reverseString("a")).toBe("a");
});

test("Empty String", () => {
	expect(reverseString("")).toBe("");
});

test("Non String", () => {
	expect(reverseString(1)).toBe(1);
});
