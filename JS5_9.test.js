const sumAll = require('./JS5_9');

describe('sumAll()', () => {
    test('handles mixed keys with valid numbers', () => {
        const input = [
            { a: 2, b: 10 },
            { a: 12, c: 11 },
            { a: 8, b: 14, d: 20 },
            { a: '8' }
        ];
        const expected = { a: 30, b: 24, c: 11, d: 20 };
        expect(sumAll(input)).toEqual(expected);
    });

    test('empty array → {}', () => {
        expect(sumAll([])).toEqual({});
    });

    test('non-numeric values are ignored', () => {
        const input = [
            { a: 1 },
            { a: '2' },
            { a: 'hello', b: true },
            { b: 5 }
        ];
        expect(sumAll(input)).toEqual({ a: 3, b: 6 }); // true => 1
    });

    test('handles keys with zero values', () => {
        const input = [
            { a: 0 },
            { a: 5 },
            { a: 0 }
        ];
        expect(sumAll(input)).toEqual({ a: 5 });
    });

    test('stringified numbers are summed', () => {
        const input = [{ a: '4' }, { a: '6' }];
        expect(sumAll(input)).toEqual({ a: 10 });
    });
});
