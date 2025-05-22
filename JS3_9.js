function maxSumNonAdjacent(nums) {
  if (nums.length === 0) return 0;
  if (nums.length === 1) return Math.max(0, nums[0]);

  let prev1 = Math.max(0, nums[0]);
  let prev2 = 0;

  for (let i = 1; i < nums.length; i++) {
    const include = nums[i] + prev2;
    const exclude = prev1;
    const current = Math.max(include, exclude);

    prev2 = prev1;
    prev1 = current;
  }

  return prev1;
}

if (require.main === module) {
  const readline = require('readline');
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.question('Enter a list of integers (space-separated): ', (input) => {
    const nums = input
      .trim()
      .split(/\s+/)
      .map(Number)
      .filter(n => !isNaN(n));

    const result = maxSumNonAdjacent(nums);
    console.log(`✅ Maximum non-adjacent subarray sum: ${result}`);
    rl.close();
  });
}

module.exports = maxSumNonAdjacent;
