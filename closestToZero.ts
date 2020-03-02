
function closestToZero(array?: number[]): number {
	if (!array || !array.length) {
		return 0;
	}
	let result = array[0];
	for (let idx = 1; idx < array.length; idx++) {
		if (
			Math.abs(array[idx]) < Math.abs(result) ||
			(Math.abs(array[idx]) === Math.abs(result) && array[idx] > 0)
		) {
			result = array[idx];
		}
	}
	return result;
}

export default closestToZero;
