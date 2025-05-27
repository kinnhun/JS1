
//Viết chương trình nhập vào một danh sách số và sắp xếp danh sách này theo thứ tự tăng dần.
function sortNumbers(numbers) {
    return numbers.slice().sort((a, b) => a - b);// sắp xếp mảng
}

if (require.main === module) {
    const readline = require('readline');

    const rl = readline.createInterface({ // tạo giao diện đọc và ghi dữ liệu 
        input: process.stdin,
        output: process.stdout
    });

    rl.question('Enter a list of numbers (space-separated): ', (input) => {
        const numbers = input
            .trim()
            .split(/\s+/)
            .map(Number)
            .filter(n => !isNaN(n));

        if (numbers.length === 0) {
            console.log('  Please enter valid numbers.');
        } else {
            const sorted = sortNumbers(numbers);
            console.log(`Sorted list: ${sorted.join(' ')}`);
        }

        rl.close();
    });
}

module.exports = sortNumbers;
