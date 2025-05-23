const templateString = require('./templateString');

test('templateString replaces {{key}} with values', () => {
  const template = 'Hello {{name}}, welcome to {{place}}!';
  const params = { name: 'Jonny', place: 'Vietnam' };
  const output = templateString(template, params);
  expect(output).toBe('Hello Jonny, welcome to Vietnam!');
});
