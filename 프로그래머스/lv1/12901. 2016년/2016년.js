function solution(a, b) {
  let days = b;
  let monthdays = [0, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  for (let i = 2; i <= a; i++) days += monthdays[i - 1];
  let weekdays = ["THU", "FRI", "SAT", "SUN", "MON", "TUE", "WED"];
  return weekdays[days % 7];
}

function solution(a, b) {
  const yoil = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  let month = String(a).length == 1 ? "0" + String(a) : String(a);
  let days = String(b).length == 1 ? "0" + String(b) : String(b);
  let date = new Date(`2016-${month}-${days}`);
  return yoil[date.getDay()];
}
