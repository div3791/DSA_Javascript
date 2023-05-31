const Queue = require('../queue/queue');

function maxSum(nums, k) {

    let max = []
    let i = 0;
    let j = 0;
    let result = [];

    while (j < nums.length) {

        while (max.size > 0 && max.rear < nums[j]) {
            max.shift()
        }

        if (j - i + 1 < k) {
            j++;
        } else if (j - i + 1 === k) {
            result.push(max);
            if (max > arr[j]) {
                max = arr[j]
            }
            i++;
            j++;
        }
    }
    return result;
}

module.exports = maxSum;

let arr = [1, -1]
let k = 1;

console.log(maxSum(arr, k))