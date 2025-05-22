const trimAll = require('./JS5_6');

describe('trimAll()', () => {
  test('"    hello     world    " → "hello world"', () => {
    expect(trimAll('    hello     world    ')).toBe('hello world');
  });

  test('"   I    am    good      " → "I am good"', () => {
    expect(trimAll('   I    am    good      ')).toBe('I am good');
  });

  test('"    " → ""', () => {
    expect(trimAll('    ')).toBe('');
  });

  test('"a   b" → "a b"', () => {
    expect(trimAll('a   b')).toBe('a b');
  });

  test('"no-extra-space" → "no-extra-space"', () => {
    expect(trimAll('no-extra-space')).toBe('no-extra-space');
  });

  test('" already clean " → "already clean"', () => {
    expect(trimAll(' already clean ')).toBe('already clean');
  });
});
