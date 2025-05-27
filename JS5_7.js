/*MapKey: Cho 1 mảng các key, vào 1 mảng các object , Viết một function để trả ra một mảng các object theo thứ tự mảng các key. ( Yêu cầu dùng hàm map )
Ví dụ
keys = [‘b', ‘a', ‘c']
collections = [{a: 1, b: 1, c: 2, d: 4, e: 5}, {a: 2, b:1, c: 5, d: 4, e: 5}, {d: 4, e: 5, a: 22, b:11, c: 51, }]
👉 [{b: 1, a: 1, c: 2}, {b: 1, a: 2, c: 5}, {b: 11, a: 22, c: 51}]
*/
function mapKey(keys, collections) { // hàm trả ra một mảng các object theo thứ tự mảng các key
    return collections.map(obj => {
        const newObj = {};
        keys.forEach(key => {
            newObj[key] = obj[key];
        });
        return newObj;
    });
}

if (require.main === module) {
    const keys = ['b', 'a', 'c'];
    const collections = [
        { a: 1, b: 1, c: 2, d: 4, e: 5 },
        { a: 2, b: 1, c: 5, d: 4, e: 5 },
        { d: 4, e: 5, a: 22, b: 11, c: 51 }
    ];

    console.log('Result:', JSON.stringify(mapKey(keys, collections), null, 2));
}

module.exports = mapKey;
