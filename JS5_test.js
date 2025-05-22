const findSmallestUnrepresentable = require('./JS5_5');

describe('findSmallestUnrepresentable()', () => {
  test('[1, 2, 3, 7, 8, 20] → 42', () => {
    expect(findSmallestUnrepresentable([1, 2, 3, 7, 8, 20])).toBe(42);
  });

  test('[1, 1, 1, 1] → 5', () => {
    expect(findSmallestUnrepresentable([1, 1, 1, 1])).toBe(5);
  });

  test('[2, 3, 4] → 1', () => {
    expect(findSmallestUnrepresentable([2, 3, 4])).toBe(1);
  });

  test('[1, 2, 5, 10, 20, 40] → 79', () => {
    expect(findSmallestUnrepresentable([1, 2, 5, 10, 20, 40])).toBe(79);
  });

  test('[1, 1, 3, 4] → 10', () => {
    expect(findSmallestUnrepresentable([1, 1, 3, 4])).toBe(10);
  });
});
