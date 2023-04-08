let data = [2, 3, 5, 6, 9, 10]

//Linear search
// Big O = O(n)
function linearSearch(n) {
    for (let i = 0; i < data.length; i++) {
        if (data[i] === n) {
            return i;
        }
    }
    return -1;
}


// Binary search
// only works on sorted array
// Big O = O(log n)
function binarySearch(arr, target) {
    if (arr.length <= 0) {
        return -1
    }

    let rightIndex = arr.length - 1;
    let leftIndex = 0;

    while (leftIndex <= rightIndex) {
        let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
        if (target === arr[middleIndex]) {
            return middleIndex;
        }
        if (target > arr[middleIndex]) {
            leftIndex = middleIndex + 1;
        } else {
            rightIndex = middleIndex - 1;
        }
    }
    return -1
}


// Recursive solution
// Big O = O(log n)
function recursiveSearch(arr, target) {
    return serach(arr, target, 0, arr.length - 1)
}

const serach = (arr, target, leftIndex, rightIndex) => {
    if (leftIndex > rightIndex) {
        return -1;
    }
    let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
    if (target === arr[middleIndex]) {
        return middleIndex;
    }
    if (target > arr[middleIndex]) {
        return serach(arr, target, middleIndex + 1, rightIndex);
    } else {
        return serach(arr, target, leftIndex, middleIndex - 1);
    }

}

console.log(recursiveSearch(data, 7))
console.log(recursiveSearch(data, 5))
console.log(recursiveSearch(data, 10))