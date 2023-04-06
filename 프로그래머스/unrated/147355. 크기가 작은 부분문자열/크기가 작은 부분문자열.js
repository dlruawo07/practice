function solution(t, p) {
    var answer = 0;
    let tArr = [];
    for (let i = 0; i < t.length - p.length + 1; i++) {
        if (Number(p) >= Number(t.substr(i, p.length))) answer++;
    }
    return answer;
}