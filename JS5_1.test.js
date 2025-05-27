const reverses = require('./JS5_1');

describe('reverses()', () => {
test('[1, 2, 3, 4, 5] → [5, 4, 3, 2, 1]', () => {
expect(reverses([1, 2, 3, 4, 5])).toEqual([5, 4, 3, 2, 1]);
});

test("['a', 'b', 'c'] → ['c', 'b', 'a']", () => {
expect(reverses(['a', 'b', 'c'])).toEqual(['c', 'b', 'a']);
});

test("['one'] → ['one']", () => {
expect(reverses(['one'])).toEqual(['one']);
});

test('[] → []', () => {
expect(reverses([])).toEqual([]);
});

test('[true, false] → [false, true]', () => {
expect(reverses([true, false])).toEqual([false, true]);
});
});
