const getMultiples = n => {
    let count = new Set();
    for (let i = 1; i < n + 1; i++)
        if (n % i === 0) count.add(i);
    return count.size;
}
function solution(left, right) {
    var answer = 0;
    for (let i = left; i < right + 1; i++)
        answer += getMultiples(i) % 2 === 0 ? i : -i;
    return answer;
}