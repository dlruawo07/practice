function solution(s) {
    let answer = "";
    let arr = s.split(" ");
    for (let i = 0; i < arr.length; i++) {
        if (i !== 0) answer += " ";
        for (let j = 0; j < arr[i].length; j++) {
            answer += (j % 2 === 0) ? arr[i][j].toUpperCase() : arr[i][j].toLowerCase();
        }
    }
    return answer;
}