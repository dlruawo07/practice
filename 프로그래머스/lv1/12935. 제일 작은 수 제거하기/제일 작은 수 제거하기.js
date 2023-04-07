function solution(arr) {
    let answer = [...arr];
    answer.splice(answer.indexOf(Math.min(...arr)), 1);
    return answer.length === 0 ? [-1] : answer;
}