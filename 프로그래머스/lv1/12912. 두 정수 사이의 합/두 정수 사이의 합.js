function solution(a, b) {
    const start = Math.min(a, b);
    const end = Math.max(a, b);
    return ((start + end) * (end - start + 1)) / 2;
}

// 기존 코드
// function solution(a, b) {
//     var answer = 0;
//     if (b > a) for (let i = a; i <= b; i++) answer += i;
//     else if (a > b) for (let i = b; i <= a; i++) answer += i;
//     else answer = a;
//     return answer;
// }
// for문을 사용해서 a부터 b까지 혹은 b부터 a까지 합을 구했는데
// 등차수열의 합 공식을 사용하면 반복문이 필요가 없어지므로 1번째 방법이 더 효율적임.
