const findShortest = require('./JS1_5');

describe('findShortest()', () => {
test('["apple", "dog", "banana"] → "dog"', () => {
expect(findShortest(['apple', 'dog', 'banana'])).toBe('dog');
});

test('["a", "ab", "abc"] → "a"', () => {
expect(findShortest(['a', 'ab', 'abc'])).toBe('a');
});

test('["hello", "hi", "hey"] → "hi"', () => {
expect(findShortest(['hello', 'hi', 'hey'])).toBe('hi');
});

test('["same", "size", "text"] → "same"', () => {
expect(findShortest(['same', 'size', 'text'])).toBe('same');
});
});
