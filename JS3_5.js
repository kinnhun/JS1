function findSmallestUnrepresentable(nums) {
  const sorted = nums.slice().sort((a, b) => a - b);
  let res = 1;

  for (let num of sorted) {
    if (num <= res) {
      res += num;
    } else {
      break;
    }
  }

  return res;
}

if (require.main === module) {
  const readline = require('readline');
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.question('Enter a list of positive integers (space-separated): ', (input) => {
    const numbers = input
      .trim()
      .split(/\s+/)
      .map(Number)
      .filter(n => n > 0 && Number.isInteger(n));

    const result = findSmallestUnrepresentable(numbers);
    console.log(`✅ Smallest positive integer that cannot be represented: ${result}`);
    rl.close();
  });
}

module.exports = findSmallestUnrepresentable;
