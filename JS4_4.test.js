const longestCommonSubstringAll = require('./JS4_4');

describe('longestCommonSubstringAll()', () => {
test('["bicycle", "tricycle", "unicycle"] → 6 ("icycle")', () => {
expect(longestCommonSubstringAll(["bicycle", "tricycle", "unicycle"])).toBe(6);
});


test('["apple", "pineapple", "crabapple"] → 5 ("apple")', () => {
expect(longestCommonSubstringAll(["apple", "pineapple", "crabapple"])).toBe(5);
});

test('["abcdef", "zabcf", "12abc"] → 3 ("abc")', () => {
expect(longestCommonSubstringAll(["abcdef", "zabcf", "12abc"])).toBe(3);
});

test('["one", "two", "three"] → 0', () => {
expect(longestCommonSubstringAll(["one", "two", "three"])).toBe(0);
});

test('["abc"] → 3', () => {
expect(longestCommonSubstringAll(["abc"])).toBe(3);
});

test('[] → 0', () => {
expect(longestCommonSubstringAll([])).toBe(0);
});
});
