function solution(s) {
    var answer = [];
    answer.push(-1);
    for (let i = 1; i < s.length; i++) {
        // slice의 indexOf 해서 있으면 현재 index - indexOf
        var sliceS = s.slice(0, i);
        var index = sliceS.lastIndexOf(s[i]);
        if (index !== -1) {
            index = i - index;
        }
        answer.push(index);
    }
    return answer;
}