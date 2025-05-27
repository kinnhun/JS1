//Viết chương trình nhập vào một chuỗi ký tự và trả về số từ trong chuỗi đó.
// // ( tìm số từ trong một chuỗi, VD: “Hello world" => 2 )
function countWords(str) {
    return str.trim().split(/\s+/).filter(Boolean).length;
}

if (require.main === module) {
    const readline = require('readline');

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question('Enter a string: ', (input) => {
        const count = countWords(input);
        console.log(`Word count: ${count}`);
        rl.close();
    });
}

module.exports = countWords;
