// solution 1
function solution(n) {
    var answer = '';
    let arr = ["수", "박"]
    for (let i = 0; i < n; i++)
        answer += (i % 2 == 0) ? arr[0] : arr[1];
    return answer;
}

// solution 2
function solution(n) {
    var answer = '';
    for (let i = 0; i < Math.floor(n / 2); i++) answer += "수박";
    if (n % 2 !== 0) answer += "수";
    return answer;
}
