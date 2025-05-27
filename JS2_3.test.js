const findLongestCommonSubstring = require('./JS2_3');

describe('findLongestCommonSubstring()', () => {
test('["abcdef", "abczyzcdef"] → "cdef"', () => {
expect(findLongestCommonSubstring('abcdef', 'abczyzcdef')).toBe('cdef');
});

test('["abc", "abc"] → "abc"', () => {
expect(findLongestCommonSubstring('abc', 'abc')).toBe('abc');
});

test('["abc", "def"] → ""', () => {
expect(findLongestCommonSubstring('abc', 'def')).toBe('');
});

test('["ababc", "babca"] → "babc"', () => {
expect(findLongestCommonSubstring('ababc', 'babca')).toBe('babc');
});

test('["", "xyz"] → ""', () => {
expect(findLongestCommonSubstring('', 'xyz')).toBe('');
});
});
