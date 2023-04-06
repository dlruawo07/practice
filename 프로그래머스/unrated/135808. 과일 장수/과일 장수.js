function solution(k, m, score) {
    var answer = 0;
    var arr = score.sort((a, b) => b - a)
    for (let i = 0; i < arr.length; i += m) {
        if (arr.length - i < m) break
        answer += (Math.min(...arr.slice(i, i + m)) * m);
    }
    return answer;
}

// [4, 4, 4, 4, 4, 4, 2, 2, 2, 2, 1, 1]