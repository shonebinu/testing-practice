const checkSignature = (a, b) => {
	if (typeof a !== "number" || typeof b !== "number") {
		throw new Error("The call should have two numerical arguments");
	}
};

const operations = {
	add: (a, b) => {
		checkSignature(a, b);
		return a + b;
	},

	subtract: (a, b) => {
		checkSignature(a, b);
		return a - b;
	},

	divide: (a, b) => {
		checkSignature(a, b);
		if (b === 0) {
			throw new Error("Division by zero is not allowed");
		}
		return a / b;
	},

	multiply: (a, b) => {
		checkSignature(a, b);
		return a * b;
	},
};

export default operations;
