const maxSumContiguousNoConsecutiveValues = require('./JS4_5');

describe('maxSumContiguousNoConsecutiveValues()', () => {
test('[1, 3, 5, 6, 7] → 9', () => {
expect(maxSumContiguousNoConsecutiveValues([1, 3, 5, 6, 7])).toBe(9);
});

test('[4, 5, 6, 1, 2, 8] → 10', () => {
expect(maxSumContiguousNoConsecutiveValues([4, 5, 6, 1, 2, 8])).toBe(10);
});

test('[10, 2, 1, 3, 7, 8] → 12', () => {
expect(maxSumContiguousNoConsecutiveValues([10, 2, 1, 3, 7, 8])).toBe(12);
});

test('[1, 4, 6, 9] → 20', () => {
expect(maxSumContiguousNoConsecutiveValues([1, 4, 6, 9])).toBe(20);
});

test('[-5, -3, -1] → -1', () => {
expect(maxSumContiguousNoConsecutiveValues([-5, -3, -1])).toBe(-1);
});

test('[] → 0', () => {
expect(maxSumContiguousNoConsecutiveValues([])).toBe(0);
});
});
