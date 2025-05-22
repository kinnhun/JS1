function findLongestWord(words) {
  if (!words.length) return null;
  return words.reduce((longest, word) =>
    word.length > longest.length ? word : longest
  );
}

if (require.main === module) {
  const readline = require('readline');

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.question('Enter a list of words (space-separated): ', (input) => {
    const words = input.trim().split(/\s+/).filter(Boolean);

    if (words.length === 0) {
      console.log('❌ Please enter at least one word.');
    } else {
      const longest = findLongestWord(words);
      console.log(`✅ The longest word is: "${longest}"`);
    }

    rl.close();
  });
}

module.exports = findLongestWord;
