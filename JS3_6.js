//Viết chương trình lấy hai danh sách số nguyên làm đầu vào và trả về giá trị trung bình của danh sách kết hợp.
//Bài mở rộng 1.8 nhưng đầu vào là 2 mảng thay vì 1
function findMedianOfTwoArrays(arr1, arr2) {// hàm tìm giá trị trung vị
    const merged = arr1.concat(arr2).filter(n => !isNaN(n));
    if (merged.length === 0) return null;

    merged.sort((a, b) => a - b);
    const mid = Math.floor(merged.length / 2);

    if (merged.length % 2 === 0) {
        return (merged[mid - 1] + merged[mid]) / 2;
    } else {
        return merged[mid];
    }
}

if (require.main === module) {
    const readline = require('readline');
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question('Enter first list of numbers (space-separated): ', (line1) => {
        rl.question('Enter second list of numbers (space-separated): ', (line2) => {
            const arr1 = line1.trim().split(/\s+/).map(Number);
            const arr2 = line2.trim().split(/\s+/).map(Number);
            const result = findMedianOfTwoArrays(arr1, arr2);
            console.log(`Median of combined list: ${result}`);
            rl.close();
        });
    });
}

module.exports = findMedianOfTwoArrays;
