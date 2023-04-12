function solution(d, budget) {
    var answer = d.sort((a, b) => b - a);
    let sum = answer.reduce((acc, cur) => acc + cur, 0);
    while (sum > budget) {
        answer.splice(0, 1);
        sum = answer.reduce((acc, cur) => acc + cur, 0);
    }
    return answer.length;
}
