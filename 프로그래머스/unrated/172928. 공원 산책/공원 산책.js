function solution(park, routes) {
  var answer = [];
  let startX, startY;
  for (var i = 0; i < park.length; i++) {
    if (park[i].indexOf("S") !== -1) {
      [startY, startX] = [i, park[i].indexOf("S")];
      break;
    }
  }
  for (var i = 0; i < routes.length; i++) {
    let [dir, move] = routes[i].split(" ");
    move = Number(move);
    if (
      (dir == "E" && startX + move >= park[0].length) ||
      (dir == "W" && startX - move < 0)
    )
      continue;
    if (
      (dir == "S" && startY + move >= park.length) ||
      (dir == "N" && startY - move < 0)
    )
      continue;

    if (dir == "E") {
      let x = 0;
      for (x = startX; x <= startX + move; x++)
        if (park[startY][x] === "X") break;
      console.log(x, startX + move);
      if (x === startX + move + 1) startX = x - 1;
    } else if (dir == "W") {
      let x = 0;
      for (x = startX; x >= startX - move; x--)
        if (park[startY][x] === "X") break;
      if (x == startX - move - 1) startX = x + 1;
    } else if (dir == "S") {
      let y = 0;
      for (y = startY; y <= startY + move; y++)
        if (park[y][startX] === "X") break;
      if (y == startY + move + 1) startY = y - 1;
    } else if (dir == "N") {
      let y = 0;
      for (y = startY; y >= startY - move; y--)
        if (park[y][startX] === "X") break;
      if (y == startY - move - 1) startY = y + 1;
    }
  }
  answer = [startY, startX];
  return answer;
}