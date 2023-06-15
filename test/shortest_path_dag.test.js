const getShortedPath = require("../graph/sortest_paths_in_DAG");

describe('Shortest paths from node', () => {

    test('case 1', () => {
        let input = [
            [0, 1, 2],
            [0, 4, 1],
            [4, 5, 4],
            [4, 2, 2],
            [1, 2, 3],
            [2, 3, 6],
            [5, 3, 1],
        ];

        let N = 6;
        let M = 7;
        expect(getShortedPath(N, M, input)).toEqual([0, 2, 3, 6, 1, 5]);
    })

    test('case 2', () => {
        var input = [
            [0, 1, 2],
            [2, 1, 2],
            [2, 4, 2],
            [1, 4, 8],
            [1, 3, 6],
        ];
        let N = 5;
        let M = 5;
        expect(getShortedPath(N, M, input)).toEqual([0, 2, -1, 8, 10]);
    })
});
