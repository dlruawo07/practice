function solution(s) {
    var answer = 0;
    for (let i = 0; i < s.length; i++) {
        var x = s[i];
        var xCount = 1;
        var yCount = 0;
        while (true) {
            i++;
            if (s[i] === x) xCount++;
            else yCount++;
            if (xCount == yCount) {
                answer++;
                break;
            }
        }
    }
    return answer;
}