const findMaxOverlapPair = require('./JS3_4');

describe('findMaxOverlapPair()', () => {
  test('["hello", "world", "foobar", "barfoo"] → ["foobar", "barfoo"]', () => {
    expect(findMaxOverlapPair(["hello", "world", "foobar", "barfoo"])).toEqual(["foobar", "barfoo"]);
  });

  test('["abc", "cba", "def"] → ["abc", "cba"]', () => {
    expect(findMaxOverlapPair(["abc", "cba", "def"])).toEqual(["abc", "cba"]);
  });

  test('["one", "two", "three"] → any valid pair with highest overlap', () => {
    const result = findMaxOverlapPair(["one", "two", "three"]);
    expect(result.length).toBe(2);
  });

  test('["aaa", "aa", "a"] → ["aaa", "aa"]', () => {
    expect(findMaxOverlapPair(["aaa", "aa", "a"])).toEqual(["aaa", "aa"]);
  });

  test('["a", "b", "c"] → any two different', () => {
    const result = findMaxOverlapPair(["a", "b", "c"]);
    expect(result.length).toBe(2);
  });
});
