function countSubsequencesWithSum(nums, target) {
  const memo = new Map();

  function dfs(i, currentSum) {
    const key = `${i},${currentSum}`;
    if (memo.has(key)) return memo.get(key);

    if (i === nums.length) {
      return currentSum === target ? 1 : 0;
    }

    // chọn hoặc không chọn nums[i]
    const include = dfs(i + 1, currentSum + nums[i]);
    const exclude = dfs(i + 1, currentSum);

    const result = include + exclude;
    memo.set(key, result);
    return result;
  }

  return dfs(0, 0);
}

if (require.main === module) {
  const readline = require('readline');
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.question('Enter a list of integers (space-separated): ', (line1) => {
    rl.question('Enter target sum: ', (line2) => {
      const nums = line1.trim().split(/\s+/).map(Number);
      const target = parseInt(line2);
      const result = countSubsequencesWithSum(nums, target);
      console.log(`✅ Number of distinct subsequences with sum ${target}: ${result}`);
      rl.close();
    });
  });
}

module.exports = countSubsequencesWithSum;
