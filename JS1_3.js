//Viết chương trình nhập một số và hiển thị bình phương của số đó. ( Tính bình phương )
function squareNumber(n) {
    return n * n;
}

if (require.main === module) {
    const readline = require('readline');

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question('Enter a number: ', (input) => {
        const num = parseFloat(input);

        if (isNaN(num)) {
            console.log('  Invalid number.');
        } else {
            console.log(`The square is: ${squareNumber(num)}`);
        }

        rl.close();
    });
}

module.exports = squareNumber;
