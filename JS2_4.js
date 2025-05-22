function sumDivisibleBy3And5(numbers) {
  return numbers
    .filter(n => n % 3 === 0 && n % 5 === 0)
    .reduce((acc, val) => acc + val, 0);
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

    const sum = sumDivisibleBy3And5(numbers);
    console.log(`✅ Sum of numbers divisible by both 3 and 5: ${sum}`);
    rl.close();
  });
}

module.exports = sumDivisibleBy3And5;
