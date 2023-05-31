function sortArr(arr) {

    let low = 0;
    let mid = 0;
    let high = arr.length - 1;

    while (mid <= high) {
        if (arr[mid] === 0) {
            [arr[low], arr[mid]] = [arr[mid], arr[low]]
            low++;
            mid++;
        } else if (arr[mid] === 1) {
            mid++;
        } else if (arr[mid] === 2) {
            [arr[high], arr[mid]] = [arr[mid], arr[high]]
            high--;
        }
    }

    return arr;
}
let arr = [1, 0, 2];
console.log(sortArr(arr));