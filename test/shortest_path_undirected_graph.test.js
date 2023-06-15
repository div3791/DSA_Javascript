const shortestPathUndirected = require("../graph/shortest_paths_in_undirected");

describe('Shortest paths from source in undirected graph', () => {

    test('case 1', () => {
        let input = [[0, 1], [0, 3], [3, 4], [4, 5], [5, 6], [1, 2], [2, 6], [6, 7], [7, 8], [6, 8]];
        let src = 0;
        let n = 9;
        let m = input.length;
        expect(shortestPathUndirected(n, m, src, input)).toEqual([0, 1, 2, 1, 2, 3, 3, 4, 4]);
    })

    test('case 2', () => {
        var input = [
            [4, 3]
        ];
        let src = 1;
        let n = 7;
        let m = 1;
        expect(shortestPathUndirected(n, m, src, input)).toEqual([-1, 0, -1, -1, -1, -1, -1]);
    })

});
