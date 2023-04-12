function solution(s) {
  const str = s.toLowerCase();
  const pCount = str.split('p').length - 1;
  const yCount = str.split('y').length - 1;
  
  return pCount === yCount;
}