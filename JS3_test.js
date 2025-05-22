const findSecondSmallest = require('./JS3_1');

describe('findSecondSmallest()', () => {
  test('[5, 1, 2, 3] → 2', () => {
    expect(findSecondSmallest([5, 1, 2, 3])).toBe(2);
  });

  test('[1, 1, 2, 2, 3] → 2', () => {
    expect(findSecondSmallest([1, 1, 2, 2, 3])).toBe(2);
  });

  test('[10] → null', () => {
    expect(findSecondSmallest([10])).toBe(null);
  });

  test('[7, 7, 7] → null', () => {
    expect(findSecondSmallest([7, 7, 7])).toBe(null);
  });

  test('[-5, -10, -3, -10] → -5', () => {
    expect(findSecondSmallest([-5, -10, -3, -10])).toBe(-5);
  });
});
