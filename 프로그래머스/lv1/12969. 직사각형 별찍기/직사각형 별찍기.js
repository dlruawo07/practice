process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const [n, m] = data.split(" ");
    console.log("*".repeat(n).concat("\n").repeat(m));
});

// 원래는 for문을 돌면서 *만 출력했었는데 for문 없이 repeat로 매번 개행을 찍어주는 로직을 지피티가 추천해줬다.
