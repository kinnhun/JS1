const smallestUnrepresentableNoConsecutive = require('./JS4_8');

describe('smallestUnrepresentableNoConsecutive()', () => {
 test('[1, 2, 3, 7, 8, 20] → 5', () => {
  expect(smallestUnrepresentableNoConsecutive([1, 2, 3, 7, 8, 20])).toBe(5);
});


  test('[1, 3, 6] → 2', () => {
    expect(smallestUnrepresentableNoConsecutive([1, 3, 6])).toBe(2);
  });

  test('[1, 4, 7] → 2', () => {
    expect(smallestUnrepresentableNoConsecutive([1, 4, 7])).toBe(2);
  });

  test('[2, 4, 6, 8] → 1', () => {
    expect(smallestUnrepresentableNoConsecutive([2, 4, 6, 8])).toBe(1);
  });

  test('[1] → 2', () => {
    expect(smallestUnrepresentableNoConsecutive([1])).toBe(2);
  });

  test('[] → 1', () => {
    expect(smallestUnrepresentableNoConsecutive([])).toBe(1);
  });
});
