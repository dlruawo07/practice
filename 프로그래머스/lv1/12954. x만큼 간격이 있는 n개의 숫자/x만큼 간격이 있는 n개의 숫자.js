function solution(x, n) {
    return Array.from({length: n}, (_, i) => x * (i + 1));
}

// 기존 코드
// function solution(x, n) {
//     var answer = [];
//     for (let i = 0; i < n; i++) answer.push(x + (x * i));
//     return answer;
// }

// 지피티가 추천해준 방법이 훨씬 간결하다.
// Array.from() 메소드로 n개만큼의 배열을 만들어서
// 배열의 요소를 x부터 시작해 x씩 증가하며 할당했다.
