const maxDifference = require('./JS3_2');

describe('maxDifference()', () => {
  test('[1, 2, 91, 9, 100] → 99', () => {
    expect(maxDifference([1, 2, 91, 9, 100])).toBe(99);
  });

  test('[10, 10, 10] → 0', () => {
    expect(maxDifference([10, 10, 10])).toBe(0);
  });

  test('[5] → null', () => {
    expect(maxDifference([5])).toBe(null);
  });

  test('[-10, 0, 10, 20] → 30', () => {
    expect(maxDifference([-10, 0, 10, 20])).toBe(30);
  });

  test('[] → null', () => {
    expect(maxDifference([])).toBe(null);
  });
});
