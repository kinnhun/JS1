function smallestUnrepresentableNoConsecutive(nums) {
  nums = nums.filter(n => n > 0);
  nums.sort((a, b) => a - b);

  const possibleSums = new Set();
  const memo = new Set();

  function dfs(index, currentSum, used) {
    const key = `${index},${currentSum},${Array.from(used).join(',')}`;
    if (memo.has(key)) return;
    memo.add(key);

    if (currentSum > 0) {
      possibleSums.add(currentSum);
    }

    for (let i = index; i < nums.length; i++) {
      const val = nums[i];
      if (used.has(val - 1) || used.has(val + 1)) continue;

      used.add(val);
      dfs(i + 1, currentSum + val, used);
      used.delete(val);
    }
  }

  dfs(0, 0, new Set());

  let res = 1;
  while (possibleSums.has(res)) {
    res++;
  }

  return res;
}

if (require.main === module) {
  const readline = require('readline');
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.question('Enter a list of integers (space-separated): ', (input) => {
    const nums = input.trim().split(/\s+/).map(Number);
    const result = smallestUnrepresentableNoConsecutive(nums);
    console.log(`✅ Smallest positive integer that cannot be represented (no consecutive): ${result}`);
    rl.close();
  });
}

module.exports = smallestUnrepresentableNoConsecutive;
