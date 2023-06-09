const floodFill = require("../graph/flood_fill");

describe('Flood fill', () => {
    test('case 1', () => {
        let input = [[1, 1, 1], [1, 1, 0], [1, 0, 1]];
        expect(floodFill(input, 1, 1, 2)).toEqual([[2, 2, 2], [2, 2, 0], [2, 0, 1]]);
    });

    test('case 2', () => {
        let input = [[0, 0, 0], [0, 0, 0]];
        expect(floodFill(input, 0, 0, 0)).toEqual([[0, 0, 0], [0, 0, 0]]);
    })

})