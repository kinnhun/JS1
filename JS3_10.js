function sortByDistinctChars(strings) {
  return strings.slice().sort((a, b) => {
    const uniqueA = new Set(a).size;
    const uniqueB = new Set(b).size;

    if (uniqueA !== uniqueB) return uniqueA - uniqueB;
    if (a.length !== b.length) return a.length - b.length;
    return a.localeCompare(b);
  });
}

module.exports = sortByDistinctChars;
