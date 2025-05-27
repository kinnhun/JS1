const sortByDistinctChars = require('./JS3_10');

describe('sortByDistinctChars()', () => {
test('["apple", "banana", "orange", "kiwi", "strawberry"]', () => {
const input = ['apple', 'banana', 'orange', 'kiwi', 'strawberry'];
const expected = ['kiwi', 'banana', 'apple', 'orange', 'strawberry'];
expect(sortByDistinctChars(input)).toEqual(expected);
});

test('["aaa", "a", "aa"] → ["a", "aa", "aaa"]', () => {
expect(sortByDistinctChars(["aaa", "a", "aa"])).toEqual(["a", "aa", "aaa"]);
});

test('["abc", "aab", "abcd", "ab"] → ["ab", "aab", "abc", "abcd"]', () => {
const input = ["abc", "aab", "abcd", "ab"];
const expected = ["ab", "aab", "abc", "abcd"];
expect(sortByDistinctChars(input)).toEqual(expected);
});

test('[] → []', () => {
expect(sortByDistinctChars([])).toEqual([]);
});
});
