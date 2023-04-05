function solution(n, m, section) {
  var answer = 0;
  var j = 0;
  for (var i = 0; i < section.length; i++) {
    while (j > section[i]) i++;
    while (j <= n) {
      if (j == section[i]) {
        answer++;
        j += m;
        break;
      }
      j++;
    }
  }
  return answer;
}