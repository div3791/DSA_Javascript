const Solution = require("../graph/is_undirected_cycle");

describe('Is Undirected Cyclic graph', () => {
    test('case 1', () => {
        const solution = new Solution();
        expect(solution.isCycle(5, [
            [5, 5],
            [0, 1],
            [1, 2],
            [1, 4],
            [2, 3],
            [3, 4],
        ])).toEqual(true)
    })

    test('case 2', () => {
        const solution = new Solution();
        expect(solution.isCycle(5, [
            [1], [0, 2, 4], [1, 3], [2, 4], [1, 3]
        ])).toEqual(true)
    })

    test('case 3', () => {
        const solution = new Solution();
        expect(solution.isCycle(2, [
            [], [2], [1, 3], [2]
        ])).toEqual(false)
    })
})
