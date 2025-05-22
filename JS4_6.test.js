const longestCommonSubstringLength = require('./JS4_6');

describe('longestCommonSubstringLength()', () => {
  test('["flower", "flow", "flight"] → 2', () => {
    expect(longestCommonSubstringLength(["flower", "flow", "flight"])).toBe(2); // "fl"
  });

  test('["abcdef", "zabcf", "12abc"] → 3', () => {
    expect(longestCommonSubstringLength(["abcdef", "zabcf", "12abc"])).toBe(3); // "abc"
  });

  test('["apple", "pineapple", "crabapple"] → 5', () => {
    expect(longestCommonSubstringLength(["apple", "pineapple", "crabapple"])).toBe(5); // "apple"
  });

  test('["dog", "racecar", "car"] → 0', () => {
    expect(longestCommonSubstringLength(["dog", "racecar", "car"])).toBe(0);
  });

  test('["abc"] → 3', () => {
    expect(longestCommonSubstringLength(["abc"])).toBe(3);
  });

  test('[] → 0', () => {
    expect(longestCommonSubstringLength([])).toBe(0);
  });
});
