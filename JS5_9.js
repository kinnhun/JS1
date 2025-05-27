/*
SumAll: Viết function để tính tổng giá trị của các key của các phần tử con trong mảng bất kỳ:
Ví dụ: 
Arr = [{a: 2, b: 10}, {a: 12, c: 11}, {a: 8, b: 14, d: 20}, {a: ‘8’}]
👉 {a: 30, b: 24, c: 11, d: 20}
Đầu vào là một mảng các object và các phần tử trong object không cố định.
Gợi ý js: reducer(), Object.keys()

*/


function sumAll(arr) {// hàm tính tổng các giá trị của các thuộc tính trong mảng các đối tượng
    return arr.reduce((acc, obj) => { // sử dụng hàm reduce để tính tổng
        // duyệt qua từng đối tượng trong mảng và cộng giá trị của các thuộc tính vào biến acc
        Object.keys(obj).forEach(key => {
            const value = Number(obj[key]);
            if (!isNaN(value)) {
                acc[key] = (acc[key] || 0) + value;
            }
        });
        return acc;
    }, {});
}

if (require.main === module) {
    const arr = [
        { a: 2, b: 10 },
        { a: 12, c: 11 },
        { a: 8, b: 14, d: 20 },
        { a: '8' }
    ];
    console.log('Sum result:', JSON.stringify(sumAll(arr), null, 2));
}

module.exports = sumAll;
