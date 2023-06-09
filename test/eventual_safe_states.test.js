const eventualSafeNodes = require("../graph/eventual_safe_states");

describe('Eventually safe states', () => {
    test('case 1', () => {
        let input = [[1, 2], [2, 3], [5], [0], [5], [], []];
        expect(eventualSafeNodes(input)).toEqual([2, 4, 5, 6]);
    });

    test('case 2', () => {
        let input = [[1, 2, 3, 4], [1, 2], [3, 4], [0, 4], []];
        expect(eventualSafeNodes(input)).toEqual([4]);
    })

})