const maxSumNonAdjacent = require('./JS3_9');

describe('maxSumNonAdjacent()', () => {
  test('[3, 2, 5, 10, 7] → 15', () => {
    expect(maxSumNonAdjacent([3, 2, 5, 10, 7])).toBe(15); // 3 + 10 + 2 excluded
  });

  test('[5, 5, 10, 100, 10, 5] → 110', () => {
    expect(maxSumNonAdjacent([5, 5, 10, 100, 10, 5])).toBe(110); // 5 + 100 + 5
  });

  test('[3, 2, 7, 10] → 13', () => {
    expect(maxSumNonAdjacent([3, 2, 7, 10])).toBe(13); // 3 + 10
  });

  test('[3, 2, 5] → 8', () => {
    expect(maxSumNonAdjacent([3, 2, 5])).toBe(8); // 3 + 5
  });

  test('[10] → 10', () => {
    expect(maxSumNonAdjacent([10])).toBe(10);
  });

  test('[] → 0', () => {
    expect(maxSumNonAdjacent([])).toBe(0);
  });

  test('[-1, -2, -3] → 0', () => {
    expect(maxSumNonAdjacent([-1, -2, -3])).toBe(0); // can't gain positive sum
  });
});
