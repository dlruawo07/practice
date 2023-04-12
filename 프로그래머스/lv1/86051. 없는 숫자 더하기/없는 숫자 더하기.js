Set.prototype.difference = function(otherSet) {
    const differenceSet = new Set();
    for (let elem of this) {
        if (!otherSet.has(elem)) differenceSet.add(elem);
    }
    return differenceSet;
}

function solution(numbers) {
    const numSet = new Set(numbers);
    const missingNums = new Set(Array.from({length: 10}, (_, i) => i)).difference(numSet);
    return [...missingNums].reduce((acc, cur) => acc + cur, 0);
}