const findMedianOfTwoArrays = require('./JS3_6');

describe('findMedianOfTwoArrays()', () => {
  test('[1, 3], [2] → 2', () => {
    expect(findMedianOfTwoArrays([1, 3], [2])).toBe(2);
  });

  test('[1, 2], [3, 4] → 2.5', () => {
    expect(findMedianOfTwoArrays([1, 2], [3, 4])).toBe(2.5);
  });

  test('[1], [] → 1', () => {
    expect(findMedianOfTwoArrays([1], [])).toBe(1);
  });

  test('[], [] → null', () => {
    expect(findMedianOfTwoArrays([], [])).toBe(null);
  });

  test('[1, 5, 9], [2, 3, 4, 6] → 4', () => {
    expect(findMedianOfTwoArrays([1, 5, 9], [2, 3, 4, 6])).toBe(4);
  });
});
