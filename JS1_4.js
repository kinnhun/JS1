//Viết chương trình nhập vào một danh sách số và hiển thị số lớn nhất trong danh sách.
function findMax(numbers) {
    return Math.max(...numbers);
}

if (require.main === module) {
    const readline = require('readline');

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question('Enter a list of numbers (space-separated): ', (input) => {
        const numbers = input
            .split(' ')
            .map(Number)
            .filter(n => !isNaN(n));
        // fomat chuỗi input thành mảng các số

        if (numbers.length === 0) {
            console.log('  Invalid input. Please enter valid numbers.');
        } else {
            console.log(`The largest number is: ${findMax(numbers)}`);
        }

        rl.close();
    });
}

module.exports = findMax;
