function solution(lottos, win_nums) {
    const [min, max] = lottos.reduce((acc, cur) => {
        if (win_nums.includes(cur)) acc[0]++, acc[1]++;
        if (cur === 0) acc[1]++;
        return acc;
    }, [0, 0])

  const rank = [6, 5, 4, 3, 2];

  let maxMatch = rank.indexOf(max) !== -1 ? rank.indexOf(max) + 1 : 5 + 1;
  let minMatch = rank.indexOf(min) !== -1 ? rank.indexOf(min) + 1 : 5 + 1;

  return [maxMatch, minMatch];
}