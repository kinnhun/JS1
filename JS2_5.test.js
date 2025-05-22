const maxSubarraySum = require('./JS2_5');

describe('maxSubarraySum()', () => {
  test('[-2, -3, 4, -1, -2, 1, 5, -3] → 7', () => {
    expect(maxSubarraySum([-2, -3, 4, -1, -2, 1, 5, -3])).toBe(7);
  });

  test('[1, 2, 3, 4] → 10', () => {
    expect(maxSubarraySum([1, 2, 3, 4])).toBe(10);
  });

  test('[-1, -2, -3] → -1', () => {
    expect(maxSubarraySum([-1, -2, -3])).toBe(-1);
  });

  test('[5, -1, 2, -1, 3] → 8', () => {
    expect(maxSubarraySum([5, -1, 2, -1, 3])).toBe(8);
  });

  test('[] → 0', () => {
    expect(maxSubarraySum([])).toBe(0);
  });
});
