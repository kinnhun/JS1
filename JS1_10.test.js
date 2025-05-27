const countStringsWithA = require('./JS1_10');

describe('countStringsWithA()', () => {
test('["apple", "banana", "cherry"] → 2', () => {
expect(countStringsWithA(['apple', 'banana', 'cherry'])).toBe(2);
});

test('["dog", "cat", "fish"] → 1', () => {
expect(countStringsWithA(['dog', 'cat', 'fish'])).toBe(1);
});

test('["hello", "world"] → 0', () => {
expect(countStringsWithA(['hello', 'world'])).toBe(0);
});

test('["a", "A", "aa"] → 2', () => {
expect(countStringsWithA(['a', 'A', 'aa'])).toBe(2);
});

test('[] → 0', () => {
expect(countStringsWithA([])).toBe(0);
});
});
