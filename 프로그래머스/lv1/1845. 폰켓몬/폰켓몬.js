function solution(nums) {
  let answer = 0;
  let total = nums.length;
  let numSet = new Set(nums);
  return Math.min(total / 2, numSet.size);
}