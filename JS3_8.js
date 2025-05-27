//Viết một chương trình lấy một danh sách các số làm đầu vào
// // và trả về số cặp số riêng biệt trong danh sách có tổng bằng một giá trị mục tiêu. ( có thể bỏ qua )
//Viết một chương trình lấy một danh sách các số nguyên làm đầu vào và
function countPairsWithSum(nums, target) { // hàm đếm số cặp có tổng bằng target
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
            console.log(`Number of distinct pairs with sum ${target}: ${result}`);
            rl.close();
        });
    });
}

module.exports = countPairsWithSum;
