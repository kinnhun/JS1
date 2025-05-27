function groupBy(collection, key) {
    return collection.reduce((acc, item) => {
        const groupKey = item[key];
        if (!acc[groupKey]) {
            acc[groupKey] = [];
        }
        acc[groupKey].push(item);
        return acc;
    }, {});
}

if (require.main === module) {
    const collect = [
        { a: 1, b: 2 },
        { a: 1, b: 3 },
        { a: 2, b: 2 }
    ];

    console.log('Group by a:', JSON.stringify(groupBy(collect, 'a'), null, 2));
    console.log('Group by b:', JSON.stringify(groupBy(collect, 'b'), null, 2));
}

module.exports = groupBy;
