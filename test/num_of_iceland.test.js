const iceland = require("../graph/num_of_iceland");

describe('Number of Icelands', () => {
    test('case 1', () => {
        let input = [
            ["1", "1", "1", "1", "0"],
            ["1", "1", "0", "1", "0"],
            ["1", "1", "0", "0", "0"],
            ["0", "0", "0", "0", "0"]
        ];
        expect(iceland(input)).toEqual(1);
    });

    test('case 2', () => {
        let input = [
            ["1", "1", "0", "0", "0"],
            ["1", "1", "0", "0", "0"],
            ["0", "0", "1", "0", "0"],
            ["0", "0", "0", "1", "1"]
        ];
        expect(iceland(input)).toEqual(3);
    })

})