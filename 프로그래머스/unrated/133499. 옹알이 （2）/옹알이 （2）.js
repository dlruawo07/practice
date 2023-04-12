function solution(babbling) {
    var answer = 0;
    for (let bab of babbling) {
        let i = 0;
        while(i < bab.length) {
            if (bab[i] === 'a' && bab[i + 1] === 'y' && bab[i + 2] === 'a' && bab[i + 3] !== 'a') i += 3;
            else if (bab[i] === 'w' && bab[i + 1] === 'o' && bab[i + 2] === 'o' && bab[i + 3] !== 'w') i += 3;
            else if (bab[i] === 'y' && bab[i + 1] === 'e' && bab[i + 2] !== 'y') i += 2;
            else if (bab[i] === 'm' && bab[i + 1] === 'a' && bab[i + 2] !== 'm') i += 2;
            else break;
        }
        if (i >= bab.length) answer++;
    }
    return answer;
}