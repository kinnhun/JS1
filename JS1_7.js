function sortStrings(strings) {
  return strings.slice().sort();
}

if (require.main === module) {
  const readline = require('readline');

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.question('Enter a list of strings (space-separated): ', (input) => {
    const strings = input.trim().split(/\s+/).filter(Boolean);

    if (strings.length === 0) {
      console.log('❌ Please enter at least one string.');
    } else {
      const sorted = sortStrings(strings);
      // in ra mảng đã sắp xếp
      console.log(`✅ Sorted strings: ${sorted.join(' ')}`);
      // in ra mảng ban đầu
      console.log(`✅ Original strings: ${strings.join(' ')}`);
    }

    rl.close();
  });
}

module.exports = sortStrings;
