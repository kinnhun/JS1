const maxOverlapPairWithMinK = require('./JS4_10');

describe('maxOverlapPairWithMinK()', () => {
test('["abcdef", "cdefgh", "efghij"], k = 2 → ["cdefgh", "efghij"]', () => {
expect(maxOverlapPairWithMinK(["abcdef", "cdefgh", "efghij"], 2)).toEqual(["abcdef", "cdefgh"]);
});

test('["apple", "pineapple", "grape"], k = 3 → ["apple", "pineapple"]', () => {
expect(maxOverlapPairWithMinK(["apple", "pineapple", "grape"], 3)).toEqual(["apple", "pineapple"]);
});

test('["abc", "xyz", "123"], k = 2 → null', () => {
expect(maxOverlapPairWithMinK(["abc", "xyz", "123"], 2)).toBeNull();
});

test('["hello", "hell", "ell"], k = 2 → ["hello", "hell"]', () => {
expect(maxOverlapPairWithMinK(["hello", "hell", "ell"], 2)).toEqual(["hello", "hell"]);
});

test('["ab"], k = 2 → null', () => {
expect(maxOverlapPairWithMinK(["ab"], 2)).toBeNull();
});
});
