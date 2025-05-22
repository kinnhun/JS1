
const squareNumber = require('./JS1_3');

describe('squareNumber()', () => {
  test('Square of 2 is 4', () => {
    expect(squareNumber(2)).toBe(4);
  });

  test('Square of -3 is 9', () => {
    expect(squareNumber(-3)).toBe(9);
  });

  test('Square of 0 is 0', () => {
    expect(squareNumber(0)).toBe(0);
  });

  test('Square of 1.5 is 2.25', () => {
    expect(squareNumber(1.5)).toBeCloseTo(2.25);
  });
});
