function solution(s) {
    var answer = [];
    answer.push(-1);
    for (let i = 1; i < s.length; i++) {
        var index = s.slice(0, i).lastIndexOf(s[i]);
        (index !== -1) ? answer.push(i - index) : answer.push(index);
    }
    return answer;
}
