function isSorted(arr, index) {
    if (index === arr.length - 1) {
        return true
    }

    if (arr[index] > arr[index + 1]) {
        return false;
    } else {
        return isSorted(arr, index + 1)
    }
}

let arr = [1, 2, 2, 3, 4]
console.log('Array is sorted: ', isSorted(arr, 0))