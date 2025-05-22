const bubbleSortPassCount = require('./JS4_1');

describe('bubbleSortPassCount()', () => {
 test('[3, 1, 4, 2, 6, 5] → 2', () => {
  expect(bubbleSortPassCount([3, 1, 4, 2, 6, 5])).toBe(2);
});


  test('[1, 2, 3, 4, 5] → 0', () => {
    expect(bubbleSortPassCount([1, 2, 3, 4, 5])).toBe(0);
  });

  test('[5, 4, 3, 2, 1] → 4', () => {
    expect(bubbleSortPassCount([5, 4, 3, 2, 1])).toBe(4);
  });

  test('[1, 3, 2, 4] → 1', () => {
    expect(bubbleSortPassCount([1, 3, 2, 4])).toBe(1);
  });

  test('[10] → 0', () => {
    expect(bubbleSortPassCount([10])).toBe(0);
  });

  test('[] → 0', () => {
    expect(bubbleSortPassCount([])).toBe(0);
  });
});
