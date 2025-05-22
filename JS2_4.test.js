const sumDivisibleBy3And5 = require('./JS2_4');

describe('sumDivisibleBy3And5()', () => {
  test('[15, 30, 45, 10] → 90', () => {
    expect(sumDivisibleBy3And5([15, 30, 45, 10])).toBe(90);
  });

  test('[3, 5, 6, 10] → 0', () => {
    expect(sumDivisibleBy3And5([3, 5, 6, 10])).toBe(0);
  });

  test('[0, 15, 60] → 75', () => {
    expect(sumDivisibleBy3And5([0, 15, 60])).toBe(75);
  });

  test('[] → 0', () => {
    expect(sumDivisibleBy3And5([])).toBe(0);
  });

  test('[45, 90, 100, 105] → 240', () => {
    expect(sumDivisibleBy3And5([45, 90, 100, 105])).toBe(240);
  });
});
