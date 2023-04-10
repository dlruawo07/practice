function solution(participant, completion) {
  let obj = {};
    
  participant.forEach((ele) => {
      obj[ele] = obj[ele] === undefined ? 1 : obj[ele] + 1;
  });
  completion.forEach((ele) => { obj[ele]-- });

  for (let key in obj)
    if (obj[key] === 1) return key;
}