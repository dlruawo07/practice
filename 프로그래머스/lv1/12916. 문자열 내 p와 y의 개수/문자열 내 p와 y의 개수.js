function solution(s) {
  const str = s.toLowerCase();
  const pCount = str.split('p').length - 1;
  const yCount = str.split('y').length - 1;
  
  return pCount === yCount;
}

// 전부 소문자로 바꾼 다음
// p로 잘랐을 때 배열의 길이
// y로 잘랐을 때 배열의 길이
// 를 비교한 값 리턴
