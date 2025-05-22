function findMedian(numbers) {
  const sorted = numbers.slice().sort((a, b) => a - b);
  const n = sorted.length;
  if (n === 0) return null;

  const mid = Math.floor(n / 2);
  if (n % 2 === 0) {
    return (sorted[mid - 1] + sorted[mid]) / 2;
  } else {
    return sorted[mid];
  }
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

    if (numbers.length === 0) {
      console.log('❌ Please enter valid numbers.');
    } else {
      const median = findMedian(numbers);
      console.log(`✅ The median is: ${median}`);
    }

    rl.close();
  });
}

module.exports = findMedian;
