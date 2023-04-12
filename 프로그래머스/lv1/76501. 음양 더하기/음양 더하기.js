function solution(absolutes, signs) {
    return absolutes.reduce((acc, cur, i) => acc + (signs[i] ? cur : -cur), 0);
}

// 기존 코드
// function solution(absolutes, signs) {
//     var answer = 0;
    
//     for (let i = 0; i < absolutes.length; i++) {
//         if (signs[i] === true) answer += absolutes[i];
//         if (signs[i] === false) answer -= absolutes[i];
//     }
    
//     return answer;
// }

// 두 방법 모두 각각 for와 reduce를 사용했기 때문에 시간복잡도는 같지만
// reduce를 사용한 방법이 더 간결하고 변수 선언과 초기화가 없기 때문에
// 첫 번째 방법이 메모리 사용량(공간복잡도) 면에서는 더 효율적이다.
