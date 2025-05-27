const maxProductOfThree = require('./JS4_7');

describe('maxProductOfThree()', () => {
test('[-10, -5, 0, 1, 2, 3, 4] → 200', () => {
expect(maxProductOfThree([-10, -5, 0, 1, 2, 3, 4])).toBe(200); // -10 * -5 * 4
});

test('[1, 2, 3, 4, 5] → 60', () => {
expect(maxProductOfThree([1, 2, 3, 4, 5])).toBe(60); // 3 * 4 * 5
});

test('[-10, -10, 5, 2] → 500', () => {
expect(maxProductOfThree([-10, -10, 5, 2])).toBe(500); // -10 * -10 * 5
});

test('[0, 0, 0] → 0', () => {
expect(maxProductOfThree([0, 0, 0])).toBe(0);
});

test('[5, -2, 3, 1] → 15', () => {
expect(maxProductOfThree([5, -2, 3, 1])).toBe(15); // 5 * 3 * 1
});

test('[1, 2] → null', () => {
expect(maxProductOfThree([1, 2])).toBe(null); // Not enough elements
});
});
