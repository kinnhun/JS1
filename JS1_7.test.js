const sortStrings = require('./JS1_7');

describe('sortStrings()', () => {
  test('["banana", "apple", "cherry"] → ["apple", "banana", "cherry"]', () => {
    expect(sortStrings(['banana', 'apple', 'cherry'])).toEqual(['apple', 'banana', 'cherry']);
  });

  test('["zebra", "monkey", "ant"] → ["ant", "monkey", "zebra"]', () => {
    expect(sortStrings(['zebra', 'monkey', 'ant'])).toEqual(['ant', 'monkey', 'zebra']);
  });

  test('["A", "a", "B"] → ["A", "B", "a"]', () => {
    expect(sortStrings(['A', 'a', 'B'])).toEqual(['A', 'B', 'a']);
  });

  test('["same", "same"] → ["same", "same"]', () => {
    expect(sortStrings(['same', 'same'])).toEqual(['same', 'same']);
  });

  test('[] → []', () => {
    expect(sortStrings([])).toEqual([]);
  });
});
