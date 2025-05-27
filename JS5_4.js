function normalize(obj) {
return JSON.stringify(Object.keys(obj).sort().reduce((acc, key) => {
acc[key] = obj[key];
return acc;
}, {}));
}

function uniqByValue(arr) {
const seen = new Set();
return arr.filter(item => {
const norm = normalize(item);
if (seen.has(norm)) return false;
seen.add(norm);
return true;
});
}

if (require.main === module) {
const input = [
{ x: 1, y: 2 },
{ x: 2, y: 1 },
{ y: 2, x: 1 }
];
console.log('Unique by value:', JSON.stringify(uniqByValue(input)));
}

module.exports = uniqByValue;
