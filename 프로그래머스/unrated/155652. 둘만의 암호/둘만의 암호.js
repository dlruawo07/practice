function solution(s, skip, index) {
  var answer = "";
  for (var i of s) {
    var ascii = i.charCodeAt(0) + 1;
    var j = 0;
    var ch = 0;
    for (var count = 0; count < index; ascii++) {
      if (ascii > 122) ascii = 97;
      ch = String.fromCharCode([ascii]);
      if (skip.indexOf(ch) === -1) count++;
    }
    answer += ch;
  }
  return answer;
}