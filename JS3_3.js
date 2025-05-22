function lengthOfLIS(arr) {
  const n = arr.length;
  if (n === 0) return 0;

  const dp = Array(n).fill(1);

  for (let i = 1; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (arr[i] > arr[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
  }

  return Math.max(...dp);
}

if (require.main === module) {
  const readline = require('readline');

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.question('Enter a list of integers (space-separated): ', (input) => {
    const numbers = input
      .trim()
      .split(/\s+/)
      .map(Number)
      .filter(n => !isNaN(n));

    const length = lengthOfLIS(numbers);
    console.log(`✅ Length of Longest Increasing Subsequence: ${length}`);
    rl.close();
  });
}

module.exports = lengthOfLIS;
