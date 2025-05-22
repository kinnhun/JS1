function findShortest(strings) {
  return strings.reduce((shortest, current) =>
    current.length < shortest.length ? current : shortest
  );
}

if (require.main === module) {
  const readline = require('readline');

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.question('Enter a list of strings (space-separated): ', (input) => {
    const strings = input.trim().split(' ').filter(Boolean);

    if (strings.length === 0) {
      console.log('❌ Please enter at least one string.');
    } else {
      console.log(`✅ The shortest string is: "${findShortest(strings)}"`);
    }

    rl.close();
  });
}

module.exports = findShortest;
