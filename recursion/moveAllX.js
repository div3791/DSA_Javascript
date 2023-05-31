function moveX(str, index, count, result, element) {

    if (index === str.length) {
        for (let i = 0; i < count; i++) {
            result += element
        }
        return result;
    }

    let char = str[index];
    if (char === element) {
        count++;
        return moveX(str, index + 1, count, result, element);
    } else {
        result += char;
        return moveX(str, index + 1, count, result, element);
    }
}

let str = 'aaxsdxf';
let element = 'a';

console.log(moveX(str, 0, 0, "", element));