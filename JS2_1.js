function findSecondLargest(numbers) {
  const unique = [...new Set(numbers)];
  if (unique.length < 2) return null;

  unique.sort((a, b) => b - a);
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

    if (numbers.length < 2) {
      console.log('❌ Please enter at least two numbers.');
    } else {
      const result = findSecondLargest(numbers);
      if (result === null) {
        console.log('❌ Not enough distinct numbers to determine second largest.');
      } else {
        console.log(`✅ The second largest number is: ${result}`);
      }
    }

    rl.close();
  });
}

module.exports = findSecondLargest;
