Set.prototype.difference = function(otherSet) {
    const differenceSet = new Set();
    for (let elem of this) {
        if (!otherSet.has(elem)) differenceSet.add(elem);
    }
    return differenceSet;
}

function solution(numbers) {
    const numSet = new Set(numbers);
    const missingNums = new Set(Array.from({length: 10}, (_, i) => i)).difference(numSet);
    return [...missingNums].reduce((acc, cur) => acc + cur, 0);
}

// 기존 코드
// function solution(numbers) {
//     var answer = 0;
//     for (let i = 0; i <= 9; i++)
//         if (numbers.indexOf(i) === -1) answer += i;
//     return answer;
// }

// 코드가 짧긴 해도 반복문을 돌기 때문에 비효율적이다.
// 입력받은 배열을 set으로 변환하고, 
// 새로운 set에는 길이가 10인 배열(0~9)을 set으로 만들되 첫 번째 set와 겹치지 않은 애들로만 구성한다.
// 다른 말로 difference 함수는 두 set의 차집합을 만환하는 메소드이다.
// 차집합 set의 모든 요소의 합을 반환하면 된다.
