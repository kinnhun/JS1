//Viết chương trình nhập vào một danh sách các số nguyên và trả về hiệu số lớn nhất giữa hai phần tử bất kỳ trong danh sách.
//VD: [1, 2, 91, 9, 100] 👉 99 ( kết quả của 100 - 1 )
function maxDifference(numbers) { // hàm tìm giá trị lớn nhất
    if (numbers.length < 2) return null;
    const min = Math.min(...numbers);
    const max = Math.max(...numbers);
    return max - min;
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

        const result = maxDifference(numbers);

        if (result === null) {
            console.log('  Please enter at least two valid integers.');
        } else {
            console.log(`Maximum difference: ${result}`);
        }

        rl.close();
    });
}

module.exports = maxDifference;
