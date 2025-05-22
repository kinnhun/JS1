const countPairsWithSum = require('./JS3_8');

describe('countPairsWithSum()', () => {
  test('[1, 5, 7, -1, 5], target = 6 → 2', () => {
    expect(countPairsWithSum([1, 5, 7, -1, 5], 6)).toBe(2); // [1,5] and [7,-1]
  });

  test('[1, 2, 3, 4, 3], target = 6 → 2', () => {
    expect(countPairsWithSum([1, 2, 3, 4, 3], 6)).toBe(2); // [2,4] and [3,3]
  });

  test('[1, 1, 1, 1], target = 2 → 1', () => {
    expect(countPairsWithSum([1, 1, 1, 1], 2)).toBe(1); // only [1,1]
  });

  test('[5, 5, 5, 5], target = 10 → 1', () => {
    expect(countPairsWithSum([5, 5, 5, 5], 10)).toBe(1); // only [5,5]
  });

  test('[], target = 10 → 0', () => {
    expect(countPairsWithSum([], 10)).toBe(0);
  });

  test('[1, 2, 3, 9], target = 8 → 0', () => {
    expect(countPairsWithSum([1, 2, 3, 9], 8)).toBe(0);
  });
});
