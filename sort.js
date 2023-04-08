// bubble sort
// Big O = O(n^2)
function bubbleSort(arr) {
    let swapped = false;
    do {
        swapped = false;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] > arr[i + 1]) {
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swapped = true;
            }
        }
    } while (swapped);
    return arr;
}

// console.log(bubbleSort([5, 8, -4, -3, 0, 2]))

// Insertion Sort

function insertionSort(arr) {

}

console.log(insertionSort([5, 8, -4, -3, 0, 2]))