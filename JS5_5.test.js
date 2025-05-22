const groupBy = require('./JS5_5');

describe('groupBy()', () => {
  const data = [
    { a: 1, b: 2 },
    { a: 1, b: 3 },
    { a: 2, b: 2 }
  ];

  test("group by 'a'", () => {
    expect(groupBy(data, 'a')).toEqual({
      1: [
        { a: 1, b: 2 },
        { a: 1, b: 3 }
      ],
      2: [
        { a: 2, b: 2 }
      ]
    });
  });

  test("group by 'b'", () => {
    expect(groupBy(data, 'b')).toEqual({
      2: [
        { a: 1, b: 2 },
        { a: 2, b: 2 }
      ],
      3: [
        { a: 1, b: 3 }
      ]
    });
  });

  test('group by missing key returns undefined group', () => {
    const input = [{ x: 1 }, { y: 2 }];
    expect(groupBy(input, 'z')).toEqual({
      undefined: [{ x: 1 }, { y: 2 }]
    });
  });

  test('group empty array', () => {
    expect(groupBy([], 'a')).toEqual({});
  });
});
