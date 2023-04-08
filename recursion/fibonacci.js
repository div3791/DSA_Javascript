function fibo(n) {
    if (n < 2) {
        return n;
    }
    return fibo(n - 1) + fibo(n - 2);
}

function fibo1(n) {
    let sum = 0;
    for (let i = n; i > 0; i--) {
        sum += (n - 1) + (n - 2);
    }
    return sum;
}

/*
Using mathamatical formula
time complexity = O(1)
characteristics of recurence 
*/
function fiboFormula(n) {
    return Math.floor((Math.pow(((1 + Math.sqrt(5)) / 2), n) - Math.pow(((1 - Math.sqrt(5)) / 2), n)) / Math.sqrt(5))
}

// for (let i = 0; i < 11; i++) {
//     console.log(fiboFormula(i))
// }
// 0
// 1
// 1
// 2
// 3
// 5
// 8
// 13
// 21
// 34
// 55


// let ans = fibo(5);
let ans1 = fiboFormula(50);

console.log(ans1)