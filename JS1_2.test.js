const stringLength = require('./JS1_2');

describe('stringLength()', () => {
test('length of "hello" is 5', () => {
expect(stringLength('hello')).toBe(5);
});

test('length of "" (empty string) is 0', () => {
expect(stringLength('')).toBe(0);
});

test('length of " " (3 spaces) is 3', () => {
expect(stringLength(' ')).toBe(3);
});

test('length of "こんにちは" (Japanese) is 5', () => {
expect(stringLength('こんにちは')).toBe(5);
});

 
});
