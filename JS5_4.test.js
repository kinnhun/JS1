const uniqByValue = require('./JS5_4');

describe('uniqByValue()', () => {
  test('removes duplicates by object value', () => {
    const input = [
      { x: 1, y: 2 },
      { x: 2, y: 1 },
      { y: 2, x: 1 }
    ];

    const expected = [
      { x: 1, y: 2 },
      { x: 2, y: 1 }
    ];

    expect(uniqByValue(input)).toEqual(expected);
  });

  test('empty array → empty array', () => {
    expect(uniqByValue([])).toEqual([]);
  });

  test('handles objects with more than 2 keys', () => {
    const input = [
      { a: 1, b: 2, c: 3 },
      { b: 2, a: 1, c: 3 },
      { a: 1, c: 3, b: 2 },
      { a: 5, b: 6, c: 7 }
    ];

    const expected = [
      { a: 1, b: 2, c: 3 },
      { a: 5, b: 6, c: 7 }
    ];

    expect(uniqByValue(input)).toEqual(expected);
  });
});
