import capitalize from "../src/capitalize.js";

test("Basic String", () => {
	expect(capitalize("name")).toBe("Name");
	expect(capitalize("firstName lastName")).toBe("FirstName lastName");
});

test("Single Character", () => {
	expect(capitalize("a")).toBe("A");
});

test("Empty String", () => {
	expect(capitalize("")).toBe("");
});

test("Non String", () => {
	expect(capitalize(1)).toBe(1);
});
