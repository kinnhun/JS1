const sum = require('./JS1_1.js');

describe('sum()', () => {
test('1 + 2 = 3', () => {
expect(sum(1, 2)).toBe(3);
});

test('0 + 0 = 0', () => {
expect(sum(0, 0)).toBe(0);
});

test('-5 + 5 = 0', () => {
expect(sum(-5, 5)).toBe(0);
});

test('1.5 + 2.5 = 4', () => {
expect(sum(1.5, 2.5)).toBe(4);
});
});
