const switchOrder = require('./JS5_8');

describe('switchOrder()', () => {
const base = [
{ id: 10, order: 0 },
{ id: 12, order: 1 },
{ id: 9, order: 2 },
{ id: 11, order: 3 }
];

test('move id=9 to order=1', () => {
const result = switchOrder(base, 9, 1);
expect(result).toEqual([
{ id: 10, order: 0 },
{ id: 9, order: 1 },
{ id: 12, order: 2 },
{ id: 11, order: 3 }
]);
});

test('move id=10 to order=3', () => {
const result = switchOrder(base, 10, 3);
expect(result).toEqual([
{ id: 12, order: 0 },
{ id: 9, order: 1 },
{ id: 11, order: 2 },
{ id: 10, order: 3 }
]);
});

test('move id not in list → no change', () => {
const result = switchOrder(base, 99, 1);
expect(result).toEqual(base);
});

test('empty array → []', () => {
expect(switchOrder([], 1, 0)).toEqual([]);
});

test('move to negative index → insert at 0', () => {
const result = switchOrder(base, 9, -5);
expect(result[0].id).toBe(9);
expect(result.map(x => x.order)).toEqual([0, 1, 2, 3]);
});

test('move to index > length → append to end', () => {
const result = switchOrder(base, 10, 10);
expect(result[result.length - 1].id).toBe(10);
expect(result.map(x => x.order)).toEqual([0, 1, 2, 3]);
});
});
