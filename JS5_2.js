function chunk(arr, n) {
if (!Array.isArray(arr) || n <= 0) return [];

const len = arr.length;
const baseSize = Math.floor(len / n);
const extra = len % n;

const result = [];
let index = 0;

for (let i = 0; i < n; i++) {
const partSize = i < extra ? baseSize + 1 : baseSize;
result.push(arr.slice(index, index + partSize));
index += partSize;
}

return result.filter(sub => sub.length > 0);
}

if (require.main === module) {
const readline = require('readline');
const rl = readline.createInterface({
input: process.stdin,
output: process.stdout
});

rl.question('Enter array elements (space-separated): ', (arrStr) => {
rl.question('Enter number of chunks: ', (numStr) => {
const arr = arrStr.trim().split(/\s+/);
const num = parseInt(numStr);
const result = chunk(arr, num);
console.log(`Chunked result: ${JSON.stringify(result)}`);
rl.close();
});
});
}

module.exports = chunk;
