function smallestUnrepresentableNoConsecutive(nums) {
  nums = nums.filter(n => n > 0);
  nums.sort((a, b) => a - b);

  function dfs(index, currentSum, usedSet) {
    const key = `${index},${currentSum},${[...usedSet].sort().join(',')}`;
    if (memo.has(key)) return;
    memo.add(key);

    if (currentSum > 0) possibleSums.add(currentSum);

    for (let i = index; i < nums.length; i++) {
      const val = nums[i];
      if (usedSet.has(val - 1) || usedSet.has(val + 1)) continue;

      usedSet.add(val);
      dfs(i + 1, currentSum + val, usedSet);
      usedSet.delete(val);
    }
  }

  const possibleSums = new Set();
  const memo = new Set();
  dfs(0, 0, new Set());

  let result = 1;
  while (possibleSums.has(result)) {
    result++;
  }

  return result;
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
    console.log(`✅ Smallest unrepresentable positive integer (no consecutive subset): ${result}`);
    rl.close();
  });
}

module.exports = smallestUnrepresentableNoConsecutive;
