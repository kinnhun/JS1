const findMedian = require('./JS1_8');

describe('findMedian()', () => {
test('[1, 3, 2] → 2', () => {
expect(findMedian([1, 3, 2])).toBe(2);
});

test('[5, 2, 1, 4] → 3', () => {
expect(findMedian([5, 2, 1, 4])).toBe(3);
});

test('[10] → 10', () => {
expect(findMedian([10])).toBe(10);
});

test('[] → null', () => {
expect(findMedian([])).toBe(null);
});

test('[7, 7, 7, 7, 7] → 7', () => {
expect(findMedian([7, 7, 7, 7, 7])).toBe(7);
});
});
