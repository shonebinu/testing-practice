function analyzeArray(nums) {
	if (nums.length === 0)
		return { average: null, min: null, max: null, length: 0 };

	let sum = nums[0];
	let min = nums[0];
	let max = nums[0];

	for (let i = 1; i < nums.length; i++) {
		sum += nums[i];
		min = Math.min(min, nums[i]);
		max = Math.max(max, nums[i]);
	}

	const length = nums.length;

	return { average: sum / length, min, max, length };
}

export default analyzeArray;
