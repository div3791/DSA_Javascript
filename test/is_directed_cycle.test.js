const Solution = require("../graph/is_directed_cycle");

describe('Is Directed Cyclic graph', () => {
    test('case 1', () => {
        const solution = new Solution();
        expect(solution.isCyclic(4, [
            [4, 4],
            [0, 1],
            [1, 2],
            [2, 3],
            [3, 3],
        ])).toEqual(true)
    })
})
