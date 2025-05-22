function uniq(arr) {
  const seen = new Set();
  return arr.filter(item => {
    if (seen.has(item)) return false;
    seen.add(item);
    return true;
  });
}

if (require.main === module) {
  const readline = require('readline');
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.question('Enter array elements (space-separated): ', (input) => {
    const arr = input.trim().split(/\s+/).map(x => isNaN(x) ? x : Number(x));
    const result = uniq(arr);
    console.log(`✅ Unique result: ${JSON.stringify(result)}`);
    rl.close();
  });
}

module.exports = uniq;
