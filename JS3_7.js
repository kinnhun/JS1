function longestPalindromeLength(str) {
  const normalized = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  const charCount = {};

  for (const char of normalized) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  let length = 0;
  let hasOdd = false;

  for (const count of Object.values(charCount)) {
    length += Math.floor(count / 2) * 2;
    if (count % 2 === 1) hasOdd = true;
  }

  return hasOdd ? length + 1 : length;
}

if (require.main === module) {
  const readline = require('readline');
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.question('Enter a string: ', (input) => {
    const result = longestPalindromeLength(input);
    console.log(`✅ Longest palindrome length (by rearrangement): ${result}`);
    rl.close();
  });
}

module.exports = longestPalindromeLength;
