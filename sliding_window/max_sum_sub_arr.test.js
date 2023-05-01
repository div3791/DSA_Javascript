
let maxSum = require("./max_sum_sub_arr");

test('Test 1', () => {
    expect(maxSum([1, 3, -1, -3, 5, 3, 6, 7], 3)).toEqual([3, 3, 5, 5, 6, 7])
})

test('Test 2', () => {
    expect(maxSum([1, -1], 1)).toEqual([1, -1])
})

test('Test 3', () => {
    expect(maxSum([4, 2, 7, 8, 4, 3], 2)).toEqual([4, 7, 8, 8, 4])
})

test('Test 4', () => {
    expect(maxSum([4], 2)).toEqual([])
})

test('Test 5', () => {
    expect(maxSum([1, 3, 1, 2, 0, 5], 3)).toEqual([3, 3, 2, 5])
})

test('Test 6', () => {
    expect(maxSum([1], 1)).toEqual([1])
})
