//Viết chương trình nhập vào một danh sách các số nguyên và trả về tổng lớn nhất của bất kỳ mảng con liền kề nào trong danh sách.

function maxSubarraySum(arr) {  // hàm tìm tổng lớn nhất của mảng con liền kề
    if (arr.length === 0) return 0;

    let maxSoFar = arr[0]; // tổng lớn nhất hiện tại
    let currentMax = arr[0]; // tổng lớn nhất kết thúc tại phần tử hiện tại

    for (let i = 1; i < arr.length; i++) {
        currentMax = Math.max(arr[i], currentMax + arr[i]);
        maxSoFar = Math.max(maxSoFar, currentMax);
    }

    return maxSoFar;
}

if (require.main === module) {
    const readline = require('readline');
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question('Enter a list of integers (space-separated): ', (input) => {
        const arr = input
            .trim()
            .split(/\s+/)
            .map(Number)
            .filter(n => !isNaN(n));

        const result = maxSubarraySum(arr);
        console.log(`Maximum contiguous subarray sum is: ${result}`);
        rl.close();
    });
}

module.exports = maxSubarraySum;
