const solve = require("../graph/replace_o_with_x");

describe('Replace O with X', () => {
    test('case 1', () => {
        var input = [
            ["X", "X", "X", "X"],
            ["X", "O", "O", "X"],
            ["X", "X", "O", "X"],
            ["X", "O", "X", "X"]
        ];
        var output = [
            ["X", "X", "X", "X"],
            ["X", "X", "X", "X"],
            ["X", "X", "X", "X"],
            ["X", "O", "X", "X"],
        ];
        expect(solve(input)).toEqual(output)
    })
    test('case 2', () => {
        var input = [
            ["X"]
        ];
        var output = [
            ["X"]
        ];
        expect(solve(input)).toEqual(output)
    })
    test('case 3', () => {
        var input = [
            ["X", "O", "X", "O", "X", "O"],
            ["O", "X", "O", "X", "O", "X"],
            ["X", "O", "X", "O", "X", "O"],
            ["O", "X", "O", "X", "O", "X"]
        ];
        var output = [
            ["X", "O", "X", "O", "X", "O"],
            ["O", "X", "X", "X", "X", "X"],
            ["X", "X", "X", "X", "X", "O"],
            ["O", "X", "O", "X", "O", "X"]
        ];
        expect(solve(input)).toEqual(output)
    })
})
