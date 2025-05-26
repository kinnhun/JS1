function switchOrder(arr, targetId, newOrder) { // hàm đổi vị trí phần tử trong mảng
  if (!Array.isArray(arr)) return [];

  const clone = [...arr];
  const targetIndex = clone.findIndex(item => item.id === targetId); 
  if (targetIndex === -1) return arr;

  const [targetItem] = clone.splice(targetIndex, 1);
  clone.splice(newOrder, 0, targetItem);

  return clone.map((item, index) => ({ ...item, order: index }));
}

if (require.main === module) {
  const arr = [
    { id: 10, order: 0 },
    { id: 12, order: 1 },
    { id: 9, order: 2 },
    { id: 11, order: 3 }
  ];

  const result = switchOrder(arr, 9, 1);
  console.log('✅ Result:', JSON.stringify(result, null, 2));
}

module.exports = switchOrder;
