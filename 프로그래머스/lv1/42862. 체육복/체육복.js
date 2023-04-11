function solution(n, lost, reserve) {
  let dupArr = lost
    .filter((ele) => reserve.includes(ele))
    .sort((a, b) => a - b);
  let newLost = lost
    .filter((ele) => !dupArr.includes(ele))
    .sort((a, b) => a - b);
  let newReserve = reserve
    .filter((ele) => !dupArr.includes(ele))
    .sort((a, b) => a - b);

  for (let one of newReserve) {
    if (newLost.includes(one - 1)) newLost.splice(newLost.indexOf(one - 1), 1);
    else if (newLost.includes(one + 1))
      newLost.splice(newLost.indexOf(one + 1), 1);
  }
  return n - newLost.length;
}