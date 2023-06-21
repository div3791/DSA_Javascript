let invertedRightNumberPyramid = (n) => {
    for (let i = n; i > 0; i--) {
        for (let j = 1; j <= i; j++) {
            process.stdout.write(`${j} `);
        }
        process.stdout.write(`\n`);
    }
}
invertedRightNumberPyramid(5);