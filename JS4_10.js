function getSubstrings(str, k) {
  const set = new Set();
  for (let i = 0; i <= str.length - k; i++) {
    set.add(str.slice(i, i + k));
  }
  return set;
}

function maxOverlapPairWithMinK(strings, k) {
  if (strings.length < 2 || k <= 0) return null;

  let maxPair = null;
  let maxCount = 0;

  for (let i = 0; i < strings.length; i++) {
    const setA = getSubstrings(strings[i], k);
    for (let j = i + 1; j < strings.length; j++) {
      const setB = getSubstrings(strings[j], k);

      let overlap = 0;
      for (const sub of setA) {
        if (setB.has(sub)) overlap++;
      }

      if (overlap > maxCount) {
        maxCount = overlap;
        maxPair = [strings[i], strings[j]];
      }
    }
  }

  return maxPair;
}

if (require.main === module) {
  const readline = require('readline');
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.question('Enter a list of strings (space-separated): ', (line1) => {
    rl.question('Enter minimum substring length k: ', (line2) => {
      const strings = line1.trim().split(/\s+/);
      const k = parseInt(line2);
      const result = maxOverlapPairWithMinK(strings, k);
      console.log(`✅ Pair with max overlapping substrings (min length ${k}): ${JSON.stringify(result)}`);
      rl.close();
    });
  });
}

module.exports = maxOverlapPairWithMinK;
