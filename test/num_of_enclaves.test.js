const numEnclaves = require("../graph/num_of_enclaves");

describe('Number of enclaves', () => {

    test('case 1', () => {
        var input = [[0, 0, 0, 0], [1, 0, 1, 0], [0, 1, 1, 0], [0, 0, 0, 0]];
        expect(numEnclaves(input)).toEqual(3)
    })
    test('case 2', () => {
        var input = [[0, 1, 1, 0], [0, 0, 1, 0], [0, 0, 1, 0], [0, 0, 0, 0]];
        expect(numEnclaves(input)).toEqual(0)
    })
});
