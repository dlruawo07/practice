function solution(s) {
      if ((s.length === 4 || s.length === 6) && parseInt(s) === Number(s))
          return true;
    return false;
}