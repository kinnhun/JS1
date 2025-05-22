function findLongestCommonSubstring(s1, s2) {
  let maxLen = 0;
  let endIndex = 0;

  const dp = Array.from({ length: s1.length + 1 }, () =>
    Array(s2.length + 1).fill(0)
  );

  for (let i = 1; i <= s1.length; i++) {
    for (let j = 1; j <= s2.length; j++) {
      if (s1[i - 1] === s2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
        if (dp[i][j] > maxLen) {
          maxLen = dp[i][j];
          endIndex = i;
        }
      }
    }
  }

  return s1.substring(endIndex - maxLen, endIndex);
}

if (require.main === module) {
  const readline = require('readline');
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.question('Enter first string: ', (s1) => {
    rl.question('Enter second string: ', (s2) => {
      const result = findLongestCommonSubstring(s1, s2);
      console.log(`✅ Longest common substring: "${result}"`);
      rl.close();
    });
  });
}

module.exports = findLongestCommonSubstring;
