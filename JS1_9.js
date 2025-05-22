function countWords(str) {
  return str.trim().split(/\s+/).filter(Boolean).length;
}

if (require.main === module) {
  const readline = require('readline');

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.question('Enter a string: ', (input) => {
    const count = countWords(input);
    console.log(`✅ Word count: ${count}`);
    rl.close();
  });
}

module.exports = countWords;
