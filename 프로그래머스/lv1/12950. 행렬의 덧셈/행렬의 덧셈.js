function solution(arr1, arr2) {
  return arr1.map((row, i) => row.map((num, j) => num + arr2[i][j]));
}

// 기존 코드
// function solution(arr1, arr2) {
//     var answer = [];
//     for (let i = 0; i < arr1.length; i++) {
//         answer.push([]);
//         for (let j = 0; j < arr1[i].length; j++) answer[i].push(0);
//     }
//     for (let i = 0; i < arr1.length; i++) {
//         for (let j = 0; j < arr1[i].length; j++) {
//             answer[i][j] = arr1[i][j] + arr2[i][j];
//         }
//     }
//     return answer;
// }

// 지피티가 추천해준 방법은 map 메소드를 두번 호출하는 것인데,
// 시간 복잡도 면에서 두 방법은 O(n^2)으로 같지만
// 딱 봐도 첫 번째 방법이 훨씬 간결하고 가독성이 좋다.
