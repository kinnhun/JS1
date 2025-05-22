const longestPalindromeLength = require('./JS3_7');

describe('longestPalindromeLength()', () => {
  test('"A man a plan a canal Panama" → 21', () => {
    expect(longestPalindromeLength('A man a plan a canal Panama')).toBe(21);
  });

  test('"racecar" → 7', () => {
    expect(longestPalindromeLength('racecar')).toBe(7);
  });

  test('"abab" → 4', () => {
    expect(longestPalindromeLength('abab')).toBe(4);
  });

  test('"abc" → 1', () => {
    expect(longestPalindromeLength('abc')).toBe(1);
  });

  test('"" → 0', () => {
    expect(longestPalindromeLength('')).toBe(0);
  });

  test('"aA" → 2', () => {
    expect(longestPalindromeLength('aA')).toBe(2); // vì a và A sẽ được tính là 'a' sau normalize
  });

  test('"!@#121abba" → 7', () => {
    expect(longestPalindromeLength('!@#121abba')).toBe(7); // normalized: "121abba"
  });
});
