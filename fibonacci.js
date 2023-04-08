const fibonacci = (n) => {
    const fib = [0, 1]

    for (let i = 2; i < n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }

    return fib;
}

const fiboWithRecursion = (n) => {
    if (n < 2) {
        return n;
    }

    return fiboWithRecursion(n - 1) + fiboWithRecursion(n - 2);
}

// console.log(fibonacci(4)) // [ 0, 1, 1, 2 ]

// Time complexicity :  O(n) Linear (as time increase according to input)


// console.log(fiboWithRecursion(0))
// console.log(fiboWithRecursion(1))
console.log(fiboWithRecursion(6))