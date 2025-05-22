const findMax = require('./JS1_4');

describe('findMax()', () => {
  test('[1, 2, 3, 4, 5] → 5', () => {
    expect(findMax([1, 2, 3, 4, 5])).toBe(5);
  });

  test('[100, -50, 200] → 200', () => {
    expect(findMax([100, -50, 200])).toBe(200);
  });

  test('[-10, -5, -1] → -1', () => {
    expect(findMax([-10, -5, -1])).toBe(-1);
  });

  test('[7] → 7', () => {
    expect(findMax([7])).toBe(7);
  });
});
