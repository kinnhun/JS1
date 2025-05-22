function findSecondSmallest(numbers) {
  const unique = [...new Set(numbers)];
  if (unique.length < 2) return null;

  unique.sort((a, b) => a - b);
  return unique[1];
}

if (require.main === module) {
  const readline = require('readline');

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.question('Enter a list of numbers (space-separated): ', (input) => {
    const numbers = input
      .trim()
      .split(/\s+/)
      .map(Number)
      .filter(n => !isNaN(n));

    const result = findSecondSmallest(numbers);
    if (result === null) {
      console.log('❌ Not enough distinct numbers to determine second smallest.');
    } else {
      console.log(`✅ The second smallest number is: ${result}`);
    }

    rl.close();
  });
}

module.exports = findSecondSmallest;
