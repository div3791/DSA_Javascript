const Solution = require("../graph/topological_sort");

describe('Kahn Topological sort graph', () => {

    // test('case 1', () => {
    //     var input = [[1, 0], [2, 0], [3, 0]];
    //     var vertex = 3;
    //     expect(topoSort(vertex, input)).toEqual([3, 2, 1, 0]);
    // })

    test('case 2', () => {
        let sol = new Solution();
        var input = [
            [5, 0],
            [4, 0],
            [5, 2],
            [4, 1],
            [2, 3],
            [3, 1],
        ];
        var vertex = 6;
        expect(sol.topoSort(vertex, input)).toEqual([0, 5, 3, 1, 4, 2]);
    })
});
