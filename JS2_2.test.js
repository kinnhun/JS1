const findLongestWord = require('./JS2_2');

describe('findLongestWord()', () => {
  test('["apple", "banana", "cherry"] → "banana"', () => {
    expect(findLongestWord(['apple', 'banana', 'cherry'])).toBe('banana');
  });

  test('["hi", "hello", "hey"] → "hello"', () => {
    expect(findLongestWord(['hi', 'hello', 'hey'])).toBe('hello');
  });

  test('["one"] → "one"', () => {
    expect(findLongestWord(['one'])).toBe('one');
  });

  test('[] → null', () => {
    expect(findLongestWord([])).toBe(null);
  });

  test('["same", "size", "test"] → "same"', () => {
    expect(findLongestWord(['same', 'size', 'test'])).toBe('same');
  });
});
