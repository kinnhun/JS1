function countPairsWithSum(nums, target) {
  const seen = new Set();
  const used = new Set();
  let count = 0;

  for (const num of nums) {
    const complement = target - num;
    const key = [Math.min(num, complement), Math.max(num, complement)].join(',');

    if (seen.has(complement) && !used.has(key)) {
      count++;
      used.add(key);
    }
    seen.add(num);
  }

  return count;
}

if (require.main === module) {
  const readline = require('readline');
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.question('Enter a list of numbers (space-separated): ', (line1) => {
    rl.question('Enter target sum: ', (line2) => {
      const nums = line1.trim().split(/\s+/).map(Number).filter(n => !isNaN(n));
      const target = parseInt(line2);

      const result = countPairsWithSum(nums, target);
      console.log(`✅ Number of distinct pairs with sum ${target}: ${result}`);
      rl.close();
    });
  });
}

module.exports = countPairsWithSum;
