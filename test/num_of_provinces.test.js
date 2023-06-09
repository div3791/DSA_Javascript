const Solution = require("../graph/num_of_provinces");

describe('Number of provinces', () => {
    test('case 1', () => {
        const solution = new Solution();
        expect(solution.numProvinces([[1, 1, 0], [1, 1, 0], [0, 0, 1]])).toEqual(2)
    })
    test('case 2', () => {
        const solution = new Solution();
        expect(solution.numProvinces([[1, 0, 0], [0, 1, 0], [0, 0, 1]])).toEqual(3)
    })
})
