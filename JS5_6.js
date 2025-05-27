
/*
TrimAll: Viết function loại bỏ tất cả khoảng trắng đầu và cuối của một chuỗi bất kỳ, 
nếu có khoảng trắng ở giữa chuỗi đó thì chỉ giữ lại một khoảng trắng. 
VD:
“    hello     world    “ 👉 “hello world" 
“   I    am    good      “ 👉 “I am good”

*/
function trimAll(str) {
    return str.trim().replace(/\s+/g, ' ');
}

if (require.main === module) {
    const readline = require('readline');
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question('Enter a string: ', (input) => {
        const result = trimAll(input);
        console.log(`Trimmed result: "${result}"`);
        rl.close();
    });
}

module.exports = trimAll;
