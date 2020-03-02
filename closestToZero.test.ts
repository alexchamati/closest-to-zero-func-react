import closestToZero from "./closestToZero";

test("handle undefined", () => {
	expect(closestToZero()).toBe(0);
});

test("handle empty array", () => {
	expect(closestToZero([])).toBe(0);
});

test("return 1 with [1]", () => {
	expect(closestToZero([1])).toBe(1);
});

test("return 1 with [5, 2, 1, 3]", () => {
	expect(closestToZero([5, 2, 1, 3])).toBe(1);
});

test("return -2 with [-5, 4, -2, 3]", () => {
	expect(closestToZero([-5, 4, -2, 3])).toBe(-2);
});

test("return 2 with [-5, 4, -2, 3, 2]", () => {
	expect(closestToZero([-5, 4, -2, 3, 2])).toBe(2);
});

test("return 2 with [-5, 4, 2, 3, -2]", () => {
	expect(closestToZero([-5, 4, 2, 3, -2])).toBe(2);
});

// Provided tests

test("return 5 with [8, 5, 10]", () => {
	expect(closestToZero([8, 5, 10])).toBe(5);
});

test("return -1 with [5, 4, -9, 6, 10, -1, 8]", () => {
	expect(closestToZero([5, 4, -9, 6, 10, -1, 8])).toBe(-1);
});

test("return 2 with [8, 2, 3, -2]", () => {
	expect(closestToZero([8, 2, 3, -2])).toBe(2);
});

test("return 0 with [2, 0]", () => {
	expect(closestToZero([2, 0])).toBe(0);
});
