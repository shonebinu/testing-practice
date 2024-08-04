function caesarCipher(str, shift = 3) {
	if (typeof str !== "string") return str;
	return str
		.split("")
		.map((c) => {
			const charCode = c.charCodeAt();
			if (65 <= charCode && charCode <= 90)
				return String.fromCharCode(((charCode - 65 + shift) % 26) + 65);

			if (97 <= charCode && charCode <= 122)
				return String.fromCharCode(((charCode - 97 + shift) % 26) + 97);

			return c;
		})
		.join("");
}

export default caesarCipher;
