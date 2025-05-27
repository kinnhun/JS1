const lengthOfLIS = require('./JS3_3');

describe('lengthOfLIS()', () => {
test('[3, 10, 2, 1, 20] → 3', () => {
expect(lengthOfLIS([3, 10, 2, 1, 20])).toBe(3);
});

test('[50, 3, 10, 7, 40, 80] → 4', () => {
expect(lengthOfLIS([50, 3, 10, 7, 40, 80])).toBe(4);
});

test('[1, 2, 3, 4, 5] → 5', () => {
expect(lengthOfLIS([1, 2, 3, 4, 5])).toBe(5);
});

test('[5, 4, 3, 2, 1] → 1', () => {
expect(lengthOfLIS([5, 4, 3, 2, 1])).toBe(1);
});

test('[] → 0', () => {
expect(lengthOfLIS([])).toBe(0);
});
});
