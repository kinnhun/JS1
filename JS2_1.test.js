const findSecondLargest = require('./JS2_1');

describe('findSecondLargest()', () => {
  test('[1, 3, 2] → 2', () => {
    expect(findSecondLargest([1, 3, 2])).toBe(2);
  });

  test('[10, 20, 30, 40] → 30', () => {
    expect(findSecondLargest([10, 20, 30, 40])).toBe(30);
  });

  test('[5, 5, 5] → null', () => {
    expect(findSecondLargest([5, 5, 5])).toBe(null);
  });

  test('[7] → null', () => {
    expect(findSecondLargest([7])).toBe(null);
  });

  test('[100, 100, 99] → 99', () => {
    expect(findSecondLargest([100, 100, 99])).toBe(99);
  });
});
