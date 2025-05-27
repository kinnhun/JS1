//Viết chương trình lấy danh sách các số nguyên làm đầu vào và trả về dãy con tăng dài nhất của các số. 
// //( Tìm kiếm chiều dài của chuỗi tịnh tiến dài nhất )
function lengthOfLIS(arr) { // hàm tìm độ dài dãy con tăng dài nhất
const n = arr.length;
if (n === 0) return 0;

const dp = Array(n).fill(1); // Khởi tạo mảng dp với tất cả giá trị là 1

for (let i = 1; i < n; i++) {
for (let j = 0; j < i; j++) {
if (arr[i] > arr[j]) {
dp[i] = Math.max(dp[i], dp[j] + 1);
}
}
}

return Math.max(...dp); // Trả về giá trị lớn nhất trong mảng dp
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
console.log(`Length of Longest Increasing Subsequence: ${length}`);
rl.close();
});
}

module.exports = lengthOfLIS;
