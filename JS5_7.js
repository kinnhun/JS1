function mapKey(keys, collections) {
  return collections.map(obj => {
    const newObj = {};
    keys.forEach(key => {
      newObj[key] = obj[key];
    });
    return newObj;
  });
}

if (require.main === module) {
  const keys = ['b', 'a', 'c'];
  const collections = [
    { a: 1, b: 1, c: 2, d: 4, e: 5 },
    { a: 2, b: 1, c: 5, d: 4, e: 5 },
    { d: 4, e: 5, a: 22, b: 11, c: 51 }
  ];

  console.log('✅ Result:', JSON.stringify(mapKey(keys, collections), null, 2));
}

module.exports = mapKey;
