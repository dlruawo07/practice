function solution(new_id) {
  let answer = new_id.toLowerCase();
  answer = answer.replace(/[^a-z0-9-_.]/g, "");
  answer = answer.replace(/[.]{2,}/g, ".");
  answer = answer.replace(/^\.|\.$/g, "");
  if (answer.length === 0) answer = "a";
  if (answer.length >= 16) answer = answer.slice(0, 15).replace(/\.$/, "");
  let len = answer.length;
  if (len <= 2) answer = answer.padEnd(3, answer[len - 1]);

  return answer;
}