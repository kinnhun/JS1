const uniq = require('./JS5_3');

describe('uniq()', () => {
  test('[1, 2, 3, 2, 4] → [1, 2, 3, 4]', () => {
    expect(uniq([1, 2, 3, 2, 4])).toEqual([1, 2, 3, 4]);
  });

  test("['a', 'b', 'a', 'c'] → ['a', 'b', 'c']", () => {
    expect(uniq(['a', 'b', 'a', 'c'])).toEqual(['a', 'b', 'c']);
  });

  test('[1, 1, 1, 1] → [1]', () => {
    expect(uniq([1, 1, 1, 1])).toEqual([1]);
  });

  test('[] → []', () => {
    expect(uniq([])).toEqual([]);
  });

  test("[1, '1', 1] → [1, '1']", () => {
    expect(uniq([1, '1', 1])).toEqual([1, '1']);
  });

  test("[true, false, true, false] → [true, false]", () => {
    expect(uniq([true, false, true, false])).toEqual([true, false]);
  });
});
