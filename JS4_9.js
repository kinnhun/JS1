/*
Viết một chương trình lấy một danh sách các số nguyên làm đầu vào
và trả về độ dài của dãy số con tăng dài nhất, với ràng buộc bổ sung
 là không có hai phần tử liền kề nào trong dãy số con có thể khác nhau quá 1. 
  Khuyến khích dùng reduce )
*/

function constrainedLIS(arr) { // hàm tính độ dài dãy con tăng dài nhất với ràng buộc
    if (arr.length === 0) return 0;

    const dp = [];

    arr.reduce((_, curr, i) => {
        dp[i] = 1;

        for (let j = 0; j < i; j++) {
            if (arr[j] < curr && curr - arr[j] <= 1) {
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
        }

        return dp[i];
    }, 0);

    return Math.max(...dp);
}

if (require.main === module) {
    const readline = require('readline');
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question('Enter a list of integers (space-separated): ', (input) => {
        const numbers = input.trim().split(/\s+/).map(Number);
        const result = constrainedLIS(numbers);
        console.log(`Length of longest increasing subsequence (diff ≤ 1): ${result}`);
        rl.close();
    });
}

module.exports = constrainedLIS;
