function solution(participant, completion) {
    participant.sort();
    completion.sort();
    
    for(let i = 0; i < completion.length; i++) {
        if(participant[i] !== completion[i]) return participant[i];
    }
    
    return participant[participant.length - 1];
}

// 기존 코드
// function solution(participant, completion) {
//   let obj = {};
    
//   participant.forEach((ele) => {
//       obj[ele] = obj[ele] === undefined ? 1 : obj[ele] + 1;
//   });
//   completion.forEach((ele) => { obj[ele]-- });

//   for (let key in obj)
//     if (obj[key] === 1) return key;
// }

// 두 배열을 먼저 정렬하고
// 일치하지 않는 인덱스의 값을 반환
// 그게 아니라면 마지막 인덱스 반환
// 시간 복잡도: O(n)
