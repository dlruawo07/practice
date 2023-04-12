process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const [n, m] = data.split(" ");
    console.log("*".repeat(n).concat("\n").repeat(m));
});