const nearestCell = require("../graph/distance_from_cell_binary");

describe('Distance from cell 0', () => {
    test('case 1', () => {
        let input = [[0, 0, 0], [0, 1, 0], [0, 0, 0]];
        expect(nearestCell(input)).toEqual([[0, 0, 0], [0, 1, 0], [0, 0, 0]]);
    });

    test('case 2', () => {
        let input = [[0, 0, 0], [0, 1, 0], [1, 1, 1]];
        expect(nearestCell(input)).toEqual([[0, 0, 0], [0, 1, 0], [1, 2, 1]]);
    })

})