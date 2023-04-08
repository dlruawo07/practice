function solution(sizes) {
  let answer = 0;
  let _sizes = [...sizes];
  let maxVal0 = null;
  let maxVal1 = null;
  for (let i = 0; i < _sizes.length; i++) {
    _sizes[i].sort((a, b) => b - a);
    maxVal0 = maxVal0 < _sizes[i][0] ? _sizes[i][0] : maxVal0;
    maxVal1 = maxVal1 < _sizes[i][1] ? _sizes[i][1] : maxVal1;
  }

  return maxVal0 * maxVal1;
}