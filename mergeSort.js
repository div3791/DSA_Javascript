function mergeSort(arr) {
    if (arr.length < 2) {
        return arr;
    }

    let mid = Math.floor(arr.length / 2);

    let left = mergeSort(arr.splice(0, mid));
    let right = mergeSort(arr.splice(mid, arr.length));

    return merge(left, right)
}

function merge(left, right) {

    let result = [];
    let i = 0;
    let j = 0;
    let k = 0;

    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            result[k] = left[i];
            i++
        } else {
            result[k] = right[j];
            j++
        }
        k++
    }

    while (i < left.length) {

    }

}

mergeSort([3, 5, 2, 1, 7])