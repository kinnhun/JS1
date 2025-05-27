function bubbleSortPassCount(arr) {
const nums = arr.slice();
const n = nums.length;
let passCount = 0;
let swapped;

for (let i = 0; i < n - 1; i++) {
swapped = false;

for (let j = 0; j < n - 1 - i; j++) {
if (nums[j] > nums[j + 1]) {
[nums[j], nums[j + 1]] = [nums[j + 1], nums[j]];
swapped = true;
}
}

if (swapped) {
passCount++;
} else {
break; // đã sorted
}
}

return passCount;
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

const passes = bubbleSortPassCount(numbers);
console.log(`Number of passes required by bubble sort: ${passes}`);
rl.close();
});
}

module.exports = bubbleSortPassCount;
