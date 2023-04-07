function solution(n) {
    var answer = [];
    let temp = n;
    for (let i = 0; i < String(n).length; i++) {
        answer.push(Math.floor(temp % 10));
        temp /= 10;
    }
    return answer;
}