function maxProductOfThree(nums) {
  if (nums.length < 3) return null;

  nums.sort((a, b) => a - b);

  const n = nums.length;

  // Hai khả năng:
  // - Tích của 3 số lớn nhất
  // - Tích của 2 số âm nhỏ nhất × số dương lớn nhất
  const max1 = nums[n - 1] * nums[n - 2] * nums[n - 3];
  const max2 = nums[0] * nums[1] * nums[n - 1];

  return Math.max(max1, max2);
}

if (require.main === module) {
  const readline = require('readline');
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.question('Enter a list of integers (space-separated): ', (input) => {
    const nums = input.trim().split(/\s+/).map(Number);
    const result = maxProductOfThree(nums);
    console.log(`✅ Maximum product of any three distinct elements: ${result}`);
    rl.close();
  });
}

module.exports = maxProductOfThree;
