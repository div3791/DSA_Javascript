const isPrime = (n) => {
    if (n < 2) {
        return false;
    }


    // Time complexity: O(n)
    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            return false
        }
    }

    //Optimized version: time complexity : O(sqrt(n))
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        }
    }

    return true;
}

console.log(isPrime(5))

// Time complexity = O(n)