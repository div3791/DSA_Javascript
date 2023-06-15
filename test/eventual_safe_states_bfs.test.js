const eventualSafeNodesBFS = require("../graph/eventual_safe_states_bfs");

describe('Eventually safe states BFS', () => {
    test('case 1', () => {
        let input = [[1, 2], [2, 3], [5], [0], [5], [], []];
        expect(eventualSafeNodesBFS(input)).toEqual([2, 4, 5, 6]);
    });

    test('case 2', () => {
        let input = [[1, 2, 3, 4], [1, 2], [3, 4], [0, 4], []];
        expect(eventualSafeNodesBFS(input)).toEqual([4]);
    })

})