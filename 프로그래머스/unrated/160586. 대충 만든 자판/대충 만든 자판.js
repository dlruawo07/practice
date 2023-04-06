function solution(keymap, targets) {
  var answer = [];

  for (var i = 0; i < targets.length; i++) {
    var count = 0;
    for (var j = 0; j < targets[i].length; j++) {
      var least = 101;
      for (var k = 0; k < keymap.length; k++) {
        var found = keymap[k].indexOf(targets[i][j]) + 1;
        if (found === 0) continue;
        least = found < least && found > 0 ? found : least;
      }
      if (least === 101) {
        count = -1;
        break;
      }
      count == -1 ? (count = -1) : (count += least);
    }
    answer.push(count);
  }
  return answer;
}