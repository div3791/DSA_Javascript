let result = {
    first: -1,
    last: -1
}
function getOccurance(string, index, element) {

    // let first = -1;
    // let last = -1;
    // let str = 'asdldsdds'
    // let element = 'd'

    // for (let i = 0; i < str.length; i++) {
    //     if (str[i] === element) {
    //         if (first >= 0) {
    //             last = i;
    //         } else {
    //             first = i;
    //             last = i
    //         }
    //     }
    // }


    if (index === string.length - 1) {
        return result;
    }

    if (string[index] === element) {
        if (result.first >= 0) {
            result.last = index;
        } else {
            result.first = index;
            result.last = index
        }
    }

    return getOccurance(string, index + 1, element)
}

let val = 'asdldsdds'

console.log(getOccurance(val, 0, 'd'))