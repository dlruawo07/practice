function convertToDays(date) {
  var [year, month, day] = date.split(".").map(Number);
  return year * 336 + month * 28 + day;
}

function solution(today, terms, privacies) {
  var answer = [];
  var todayCount = convertToDays(today);
  for (var i = 0; i < privacies.length; i++) {
    var privacy = privacies[i].split(" ");
    var date = convertToDays(privacy[0]);
    for (var j = 0; j < terms.length; j++) {
      var term = terms[j].split(" ");
      if (term[0] === privacy[1]) {
        if (todayCount - date >= Number(term[1] * 28)) {
          answer.push(i + 1);
        }
      }
    }
  }
  return answer;
}