function trimAll(str) {
  return str.trim().replace(/\s+/g, ' ');
}

if (require.main === module) {
  const readline = require('readline');
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.question('Enter a string: ', (input) => {
    const result = trimAll(input);
    console.log(`✅ Trimmed result: "${result}"`);
    rl.close();
  });
}

module.exports = trimAll;
