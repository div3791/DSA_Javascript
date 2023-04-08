
/* IIFE (Immedietly invoked function expression) */
(function (x) {
    console.log(x * x);
})(5);

function demo() {
    console.log('object')
}

function sum(a) {
    return function (b) {
        return function (c) {
            return a + b + c;
        }
    }
}

console.log(sum(1)(2)(3))


