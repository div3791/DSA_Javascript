function canSum(target, arr) {
    if (arr === null) return false;
    if (arr.length === 0) return false;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] + arr[i + 1] === target) {
            return true
        }
        if (arr[i] === target) {
            return true
        }
    }

    return false;
}

console.log(canSum(7, [2, 3]))
console.log(canSum(7, [0, 0, 0]))
console.log(canSum(7, [2, 4]))
console.log(canSum(8, [2, 3, 5]))
console.log(canSum(300, [7, 14]))