const factorial = (n) => {
    let sum = 1;
    for (let i = n; i > 0; i--) {
        sum *= i
    }
    return sum;
}

// console.log(factorial(5));  // 5 * 4 * 3 * 2 * 1

// Time complexity = O(n) Linear (as time increase according to input)]

const factorialRecursive = (n) => {
    if (n === 0) {
        return 1;
    }
    return n * factorialRecursive(n - 1);
}

console.log(factorialRecursive(0))
console.log(factorialRecursive(1))
console.log(factorialRecursive(5))