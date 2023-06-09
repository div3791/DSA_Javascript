const countDistinctIslands = require("../graph/num_of_distinct_icelands");

describe('Number of Icelands', () => {
    test('case 1', () => {
        let input = [
            [1, 1, 0, 1, 1],
            [1, 0, 0, 0, 0],
            [0, 0, 0, 0, 1],
            [1, 1, 0, 1, 1],
        ];
        expect(countDistinctIslands(input)).toEqual(3);
    });

    test('case 2', () => {
        let input = [
            [1, 1, 0, 0, 0],
            [1, 1, 0, 0, 0],
            [0, 0, 0, 1, 1],
            [0, 0, 0, 1, 1]
        ];
        expect(countDistinctIslands(input)).toEqual(1);
    })

})