var rightAngleNumberPyramid = (n) => {
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= i; j++) {
            process.stdout.write(`${j} `);
        }

        process.stdout.write('\n');
    }
}

rightAngleNumberPyramid(5)