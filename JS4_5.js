function maxSumContiguousNoConsecutiveValues(arr) {
let maxSum = Number.NEGATIVE_INFINITY;

for (let start = 0; start < arr.length; start++) {
let sum = 0;
const seen = new Set();
let valid = true;

for (let end = start; end < arr.length; end++) {
const current = arr[end];

if (seen.has(current + 1) || seen.has(current - 1)) {
break;
}

seen.add(current);
sum += current;
maxSum = Math.max(maxSum, sum);
}
}

return maxSum === Number.NEGATIVE_INFINITY ? 0 : maxSum;
}

if (require.main === module) {
const readline = require('readline');
const rl = readline.createInterface({
input: process.stdin,
output: process.stdout
});

rl.question('Enter a list of integers (space-separated): ', (input) => {
const numbers = input.trim().split(/\s+/).map(Number);
const result = maxSumContiguousNoConsecutiveValues(numbers);
console.log(`Maximum sum (no consecutive values): ${result}`);
rl.close();
});
}

module.exports = maxSumContiguousNoConsecutiveValues;
