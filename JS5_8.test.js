const mapKey = require('./JS5_8');

describe('mapKey()', () => {
  const keys = ['b', 'a', 'c'];
  const input = [
    { a: 1, b: 1, c: 2, d: 4, e: 5 },
    { a: 2, b: 1, c: 5, d: 4, e: 5 },
    { d: 4, e: 5, a: 22, b: 11, c: 51 }
  ];

  const expected = [
    { b: 1, a: 1, c: 2 },
    { b: 1, a: 2, c: 5 },
    { b: 11, a: 22, c: 51 }
  ];

  test('maps keys in given order from each object', () => {
    expect(mapKey(keys, input)).toEqual(expected);
  });

  test('empty keys array returns empty objects', () => {
    expect(mapKey([], input)).toEqual([{}, {}, {}]);
  });

  test('empty input array returns []', () => {
    expect(mapKey(keys, [])).toEqual([]);
  });

  test('missing key returns undefined value', () => {
    const input2 = [{ a: 1 }, { b: 2 }, { c: 3 }];
    const expected2 = [{ b: undefined, a: 1, c: undefined }, { b: 2, a: undefined, c: undefined }, { b: undefined, a: undefined, c: 3 }];
    expect(mapKey(keys, input2)).toEqual(expected2);
  });
});
