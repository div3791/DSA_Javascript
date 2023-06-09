const isBipartite = require("../graph/is_bipartite");

describe('Check if graph is bipartite', () => {
    test('case 1', () => {
        let input = [[1, 2, 3], [0, 2], [0, 1, 3], [0, 2]];
        expect(isBipartite(input)).toEqual(false);
    });

    test('case 2', () => {
        let input = [[1, 3], [0, 2], [1, 3], [0, 2]];
        expect(isBipartite(input)).toEqual(true);
    })

})