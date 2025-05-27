//Viết chương trình lấy danh sách các chuỗi làm đầu vào và trả về hai chuỗi có số ký tự trùng nhau lớn nhất. 
//Tìm 2 chuỗi có nhiều ký tự trùng lặp nhất
function countSharedChars(str1, str2) { // hàm đếm số ký tự chung
    const set1 = new Set(str1);
    const set2 = new Set(str2);
    let count = 0;

    for (const ch of set1) {     // duyệt qua từng ký tự trong set1
        if (set2.has(ch)) count++;   //
    }

    return count;
}

function findMaxOverlapPair(strings) {  // hàm tìm cặp chuỗi có nhiều ký tự chung nhất
    let maxCount = -1;
    let resultPair = [];

    for (let i = 0; i < strings.length; i++) {
        for (let j = i + 1; j < strings.length; j++) {
            const count = countSharedChars(strings[i], strings[j]);
            if (count > maxCount) {
                maxCount = count;
                resultPair = [strings[i], strings[j]];
            }
        }
    }

    return resultPair;
}

if (require.main === module) {
    const readline = require('readline');
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question('Enter a list of strings (space-separated): ', (input) => {
        const words = input.trim().split(/\s+/);
        const result = findMaxOverlapPair(words);
        console.log(`Strings with most shared characters: [ "${result[0]}", "${result[1]}" ]`);
        rl.close();
    });
}

module.exports = findMaxOverlapPair;
