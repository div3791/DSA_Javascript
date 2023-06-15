const dijkstra = require("../graph/dijkstras_alog");

describe('Dijkstra algorithm', () => {
    test('case 1', () => {
        let input = [[[1, 9]], [[0, 9]]];
        let S = 0;
        let V = 2;
        expect(dijkstra(V, input, S)).toEqual([0, 9]);
    })

    test('case 2', () => {
        var input = [[[1, 1], [2, 6]], [[2, 3], [0, 1]], [[1, 3], [0, 6]]];
        let V = 3;
        let S = 2;
        expect(dijkstra(V, input, S)).toEqual([4, 3, 0]);
    })
});