var rightAnagleIncrementalNumberPyramid = (n) => {
    for (let i = 1; i <= n; i++) {
        for (let j = 0; j < i; j++) {
            process.stdout.write(`${i} `);
        }

        process.stdout.write('\n');
    }
}

rightAnagleIncrementalNumberPyramid(5);