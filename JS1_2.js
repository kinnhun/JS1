
//Viết chương trình nhập vào một chuỗi ký tự và hiển thị độ dài của chuỗi đó.
// Hàm tính độ dài chuỗi
function stringLength(str) {
    return str.length;
}

// Nếu chạy trực tiếp bằng Node CLI
if (require.main === module) {
    const readline = require('readline');
    const rl = readline.createInterface({
        input: process.stdin, // đọcdữ liệu nhập vào 
        output: process.stdout // in ra console 
    });

    rl.question('Enter a string: ', (input) => {
        console.log(`The length of the string is: ${stringLength(input)}`);
        rl.close();
    });
}

// Export hàm để test
module.exports = stringLength;
