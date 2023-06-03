const Solution = require("../graph/DFS");

describe('DFS', () => {
    test('should return DFS traversal array 1', () => {
        const solution = new Solution();
        expect(solution.dfsOfGraph(5, [[2, 3, 1], [0], [0, 4], [0], [2]])).toEqual([0, 2, 4, 3, 1])
    })

    test('should return DFS traversal array 2', () => {
        const solution = new Solution();
        expect(solution.dfsOfGraph(4, [[1, 3], [2, 0], [1], [0]])).toEqual([0, 1, 2, 3])
    })
})



