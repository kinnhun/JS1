const countSubsequencesWithSum = require('./JS4_2');

describe('countSubsequencesWithSum()', () => {
test('[1, 2, 3, 4, 5] with target 5 → 3', () => {
expect(countSubsequencesWithSum([1, 2, 3, 4, 5], 5)).toBe(3);
});


test('[1, 1, 2, 3, 4] with target 5 → 4', () => {
expect(countSubsequencesWithSum([1, 1, 2, 3, 4], 5)).toBe(4);
});

test('[2, 4, 6, 10] with target 16 → 2', () => {
expect(countSubsequencesWithSum([2, 4, 6, 10], 16)).toBe(2);
});

test('[1, 2, 3] with target 6 → 1', () => {
expect(countSubsequencesWithSum([1, 2, 3], 6)).toBe(1); // [1,2,3]
});

test('[1, 2, 3] with target 7 → 0', () => {
expect(countSubsequencesWithSum([1, 2, 3], 7)).toBe(0);
});

test('[] with target 0 → 1', () => {
expect(countSubsequencesWithSum([], 0)).toBe(1); // only empty subset
});

test('[] with target 1 → 0', () => {
expect(countSubsequencesWithSum([], 1)).toBe(0);
});
});
