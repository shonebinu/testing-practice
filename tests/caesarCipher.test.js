import caesarCipher from "../src/caesarCipher.js";

test("Alphabets repeat from start", () => {
	expect(caesarCipher("xyz", 3)).toBe("abc");
});

test("Case preservation", () => {
	expect(caesarCipher("HeLLo", 3)).toBe("KhOOr");
});

test("Non alphabetical characters", () => {
	expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
});

test("Negative shifts", () => {
	expect(caesarCipher("Khoor, Zruog!", -3)).toBe("Hello, World!");
});
