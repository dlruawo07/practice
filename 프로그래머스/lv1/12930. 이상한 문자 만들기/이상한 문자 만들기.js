function solution(s) {
  return s
    .split(" ")
    .map((word) =>
      word
        .split("")
        .map((char, i) =>
          !(i % 2) ? char.toUpperCase() : char.toLowerCase()
        )
        .join("")
    )
    .join(" ");
}

// 기존 코드
// function solution(s) {
//     let answer = "";
//     let arr = s.split(" ");
//     for (let i = 0; i < arr.length; i++) {
//         if (i !== 0) answer += " ";
//         for (let j = 0; j < arr[i].length; j++) {
//             answer += (j % 2 === 0) ? arr[i][j].toUpperCase() : arr[i][j].toLowerCase();
//         }
//     }
//     return answer;
// }

// 각 단어별로 짝/홀수 인덱스를 판단해 대/소문자로 변환 후 join 후 단어들을 전부 join.
