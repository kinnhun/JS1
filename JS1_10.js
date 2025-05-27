//Viết chương trình nhập vào danh sách các chuỗi ký tự và trả về số chuỗi có chứa chữ cái 'a'.
// hàm đếm số chuỗi có chứa chữ cái 'a'
function countStringsWithA(strings) {
    return strings.filter(str => str.includes('a')).length;
}

if (require.main === module) {
    const readline = require('readline');

    const rl = readline.createInterface({ // tạo giao diện đọc và ghi dữ liệu
        input: process.stdin,
        output: process.stdout
    });

    rl.question('Enter a list of strings (space-separated): ', (input) => {
        const strings = input.trim().split(/\s+/).filter(Boolean);

        if (strings.length === 0) {
            console.log('  Please enter valid strings.');
        } else {
            const count = countStringsWithA(strings);
            console.log(`Number of strings containing 'a': ${count}`);
        }

        rl.close();
    });
}

module.exports = countStringsWithA;
