function solution(babbling) {
    var answer = 0;
    for (let bab of babbling) {
        let i = 0;
        while(i < bab.length) {
            if (bab.slice(i, i + 3) === "aya" && bab[i + 3] !== 'a') i += 3;
            else if (bab.slice(i, i + 3) === "woo" && bab[i + 3] !== 'w') i += 3;
            else if (bab.slice(i, i + 2) === "ye" && bab[i + 2] !== 'y') i += 2;
            else if (bab.slice(i, i + 2) === "ma" && bab[i + 2] !== 'm') i += 2;
            else break;
        }
        if (i >= bab.length) answer++;
    }
    return answer;
}
