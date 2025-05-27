const chunk = require('./JS5_2');

describe('chunk()', () => {
test("chunk(['a', 'b', 'c', 'd'], 2) → [['a', 'b'], ['c', 'd']]", () => {
expect(chunk(['a', 'b', 'c', 'd'], 2)).toEqual([['a', 'b'], ['c', 'd']]);
});

test("chunk(['a', 'b', 'c', 'd'], 3) → [['a', 'b'], ['c'], ['d']]", () => {
expect(chunk(['a', 'b', 'c', 'd'], 3)).toEqual([['a', 'b'], ['c'], ['d']]);
});

test("chunk(['x', 'y', 'z'], 1) → [['x', 'y', 'z']]", () => {
expect(chunk(['x', 'y', 'z'], 1)).toEqual([['x', 'y', 'z']]);
});

test("chunk([], 3) → []", () => {
expect(chunk([], 3)).toEqual([]);
});

test("chunk(['a', 'b', 'c'], 5) → [['a'], ['b'], ['c']]", () => {
expect(chunk(['a', 'b', 'c'], 5)).toEqual([['a'], ['b'], ['c']]);
});

test("chunk(['a', 'b', 'c'], 0) → []", () => {
expect(chunk(['a', 'b', 'c'], 0)).toEqual([]);
});
});
