function solution(participant, completion) {
    let object = {};
    
    participant.forEach((item) => {
    if (object[item] === undefined) object[item] = 1;
    else object[item] += 1;
  });

  completion.forEach((item) => {
    if (object[item] !== undefined) object[item] -= 1;
  });

  for (let key in object) if (object[key] === 1) return key;
}