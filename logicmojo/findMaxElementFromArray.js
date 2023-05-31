function searchMax(arr, start, end) {
    if (start === end) return arr[start];
    if (end === (start + 1)) return Math.max(arr[end], arr[start]);

    let mid = Math.floor((start + end) / 2);

    if (arr[mid] > arr[mid + 1] && arr[mid] > arr[mid - 1]) {
        return arr[mid];
    }
    if (arr[mid] > arr[mid + 1] && arr[mid] < arr[mid - 1]) {
        return searchMax(arr, start, mid - 1);
    } else {
        return searchMax(arr, mid + 1, end);
    }
}

let arr = [6, 9, 15, 25, 35, 50, 41, 29, 23, 8];

console.log(searchMax(arr, 0, arr.length - 1));