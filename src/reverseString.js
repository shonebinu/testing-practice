function reverseString(str) {
	return typeof str === "string" ? str.split("").reverse().join("") : str;
}

export default reverseString;
