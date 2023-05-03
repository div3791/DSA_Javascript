function mergeSort(arr) {
    if (arr.length === 1) {
        return arr;
    }
    let mid = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));

    return merge(left, right)
}

function merge(left, right) {
    let i = 0;
    let j = 0;
    let k = 0;
    let result = [];
    while (i < left.length && j < right.length) {
        if (left[i] > right[j]) {
            result[k] = right[j];
            j++
        } else {
            result[k] = left[i];
            i++
        }
        k++;
    }

    while (i < left.length) {
        result[k] = left[i];
        i++
        k++
    }

    while (j < right.length) {
        result[k] = right[j]
        j++
        k++
    }

    return result
}

let arr = [8, -50, -10, 0, 7, 4, -3];
console.log(mergeSort(arr));