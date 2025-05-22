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
      console.log(`✅ Sorted strings: ${sorted.join(' ')}`);
    }

    rl.close();
  });
}

module.exports = sortStrings;
