function solution(n) {
    var answer = '';
    let arr = ["수", "박"]
    for (let i = 0; i < n; i++) {
        answer += (i % 2 == 0) ? arr[0] : arr[1];
    }
    return answer;
}