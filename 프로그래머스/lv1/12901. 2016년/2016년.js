function solution(a, b) {
  let days = b;
  for (let month = 2; month <= a; month++) {
    if (month == 3) days += 29;
    else if (month == 5 || month == 7 || month == 10 || month == 12) days += 30;
    else days += 31;
  }
    
//     let arr = ["THU", "FRI", "SAT", "SUN", "MON", "TUE"];
    
//     let remainder = Math.floor(days % 7);
    
//     return arr[remainder];

  if (days % 7 == 0) return "THU";
  if (days % 7 == 1) return "FRI";
  if (days % 7 == 2) return "SAT";
  if (days % 7 == 3) return "SUN";
  if (days % 7 == 4) return "MON";
  if (days % 7 == 5) return "TUE";
  return "WED";
}