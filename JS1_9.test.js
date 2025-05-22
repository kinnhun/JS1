const countWords = require('./JS1_9');

describe('countWords()', () => {
  test('"Hello world" → 2', () => {
    expect(countWords('Hello world')).toBe(2);
  });

  test('"   Leading and trailing spaces   " → 4', () => {
    expect(countWords('   Leading and trailing spaces   ')).toBe(4);
  });

  test('"Multiple   spaces between words" → 4', () => {
    expect(countWords('Multiple   spaces between words')).toBe(4);
  });

  test('"" → 0', () => {
    expect(countWords('')).toBe(0);
  });

  test('"Một hai ba" → 3', () => {
    expect(countWords('Một hai ba')).toBe(3);
  });
});
