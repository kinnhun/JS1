function sumAll(arr) {    // hàm tính tổng các giá trị của các thuộc tính trong mảng các đối tượng
  return arr.reduce((acc, obj) => {   // sử dụng hàm reduce để tính tổng
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
  console.log('✅ Sum result:', JSON.stringify(sumAll(arr), null, 2));
}

module.exports = sumAll;
