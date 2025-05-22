const constrainedLIS = require('./JS4_9');

describe('constrainedLIS()', () => {
  test('[1, 2, 3, 5, 6, 7] → 3', () => {
    expect(constrainedLIS([1, 2, 3, 5, 6, 7])).toBe(3); // e.g., [1,2,3] or [5,6,7]
  });

  test('[4, 5, 6, 7, 10] → 4', () => {
    expect(constrainedLIS([4, 5, 6, 7, 10])).toBe(4); // [4,5,6,7]
  });

  test('[1, 3, 5, 7] → 1', () => {
    expect(constrainedLIS([1, 3, 5, 7])).toBe(1); // no two elements with diff ≤ 1
  });

  test('[1, 2, 2, 3, 4] → 4', () => {
    expect(constrainedLIS([1, 2, 2, 3, 4])).toBe(4); // [1,2,3,4]
  });

  test('[5] → 1', () => {
    expect(constrainedLIS([5])).toBe(1);
  });

  test('[] → 0', () => {
    expect(constrainedLIS([])).toBe(0);
  });
});
