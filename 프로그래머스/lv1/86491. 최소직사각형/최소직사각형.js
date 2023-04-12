function solution(sizes) {
  let maxVal0 = 0;
  let maxVal1 = 0;
  for (let i = 0; i < sizes.length; i++) {
    const [a, b] = sizes[i].sort((a, b) => b - a);
    maxVal0 = Math.max(maxVal0, a);
    maxVal1 = Math.max(maxVal1, b);
  }

  return maxVal0 * maxVal1;
}