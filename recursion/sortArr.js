function sortArr(arr) {

    if (arr.length === 1) {
        return arr;
    }

    let temp = arr[arr.length - 1];
    arr.pop();
    sortArr(arr);

    return sort(arr, temp)
}

function sort(arr, temp) {
    let i = 0;
    let k = 0;
    let result = [];
    while (i < arr.length) {
        if (arr[i] < temp) {
            result[k] = arr[i];
        } else {
            result[k] = temp;
            break;
        }
        i++;
        k++
    }
    return [...result, ...arr.slice(i)];
}

let arr = [1, 2, 3, 4, 5];
console.log(sortArr(arr, 3));