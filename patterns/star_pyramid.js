var starPyramid = (n) => {
    for (let i = n; i > 0; i--) {
        for (let k = 0; k <= i; k++) {
            process.stdout.write(' ')
        }
        for (let j = i; j <= n; j++) {
            process.stdout.write('* ')
        }
        process.stdout.write('\n')
    }

}

starPyramid(5);