import calculator from "../src/calculator.js";

test("Basic two operand operations", () => {
	expect(calculator.add(1, 2)).toBe(3);
	expect(calculator.subtract(2, 1)).toBe(1);
	expect(calculator.divide(2, 1)).toBe(2);
	expect(calculator.multiply(2, 1)).toBe(2);
	expect(calculator.multiply(-2, 1)).toBe(-2);
});

test("Not given two numerical operands", () => {
	expect(() => calculator.add()).toThrow();
	expect(() => calculator.add(1)).toThrow();
	expect(() => calculator.add(null)).toThrow();
});

test("Division by 0", () => {
	expect(() => calculator.divide(4, 0)).toThrow();
});
