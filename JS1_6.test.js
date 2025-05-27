const sortNumbers = require('./JS1_6');

describe('sortNumbers()', () => {
test('[3, 1, 2] → [1, 2, 3]', () => {
expect(sortNumbers([3, 1, 2])).toEqual([1, 2, 3]);
});

test('[10, -5, 0, 2] → [-5, 0, 2, 10]', () => {
expect(sortNumbers([10, -5, 0, 2])).toEqual([-5, 0, 2, 10]);
});

test('[1] → [1]', () => {
expect(sortNumbers([1])).toEqual([1]);
});

test('[] → []', () => {
expect(sortNumbers([])).toEqual([]);
});
});
