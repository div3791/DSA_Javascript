function subSec(str, index, result) {
    if (index === str.length) {
        return [result];
    }

    let left = subSec(str, index + 1, result + str[index]);

    let right = subSec(str, index + 1, result);

    return [...left, ...right]
}

let str = 'abcd';
let result = subSec(str, 0, "")
result.pop()
console.log(result);