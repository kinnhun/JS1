function longestCommonSubstringLength(strings) {
  if (strings.length === 0) return 0;
  if (strings.length === 1) return strings[0].length;

  const base = strings[0];

  for (let len = base.length; len >= 1; len--) {
    for (let start = 0; start <= base.length - len; start++) {
      const candidate = base.substring(start, start + len);

      if (strings.every(str => str.includes(candidate))) {
        return candidate.length;
      }
    }
  }

  return 0;
}

if (require.main === module) {
  const readline = require('readline');
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.question('Enter a list of strings (space-separated): ', (input) => {
    const strings = input.trim().split(/\s+/);
    const result = longestCommonSubstringLength(strings);
    console.log(`✅ Length of longest common substring: ${result}`);
    rl.close();
  });
}

module.exports = longestCommonSubstringLength;
