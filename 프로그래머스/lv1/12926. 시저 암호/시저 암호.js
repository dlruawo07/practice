function solution(s, n) {
  let answer = "";

  for (let i = 0; i < s.length; i++) {
    let ascii = s.charCodeAt(i);
    if (ascii === 32) {
      answer += " ";
    } else {
      let newAscii = ascii + n;
      if (ascii <= 90 && newAscii > 90)
        newAscii -= 26;
      else if (ascii <= 122 && newAscii > 122)
        newAscii -= 26;
      answer += String.fromCharCode(newAscii);
    }
  }

  return answer;
}