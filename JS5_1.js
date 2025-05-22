function reverses(arr) {
  return arr.reduce((acc, item) => [item, ...acc], []);
}

// Hoặc dùng forEach:
// function reverses(arr) {
//   const result = [];
//   arr.forEach(item => result.unshift(item));
//   return result;
// }

if (require.main === module) {
  const readline = require('readline');
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.question('Enter array elements (space-separated): ', (input) => {
    const arr = input.trim().split(/\s+/);
    const result = reverses(arr);
    console.log(`✅ Reversed array: [${result.join(', ')}]`);
    rl.close();
  });
}

module.exports = reverses;
