function solution(n, arr1, arr2) {
  const answer = [];
  for (let i = 0; i < n; i++) {
    const binary = (arr1[i] | arr2[i]).toString(2).padStart(n, '0');
    const decrypted = binary.replace(/0/g, ' ').replace(/1/g, '#');
    answer.push(decrypted);
  }
  return answer;
}