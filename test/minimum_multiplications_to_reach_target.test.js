const minimumMultiplications = require("../graph/minimum_multiplications_to_reach_target");

describe('Minimum multiplications to reach end', () => {

    test('case 1', () => {
        let input = [2, 5, 7];

        let start = 3;
        let end = 30;

        expect(minimumMultiplications(input, start, end)).toEqual(2);
    })

    test('case 2', () => {
        let input = [3, 4, 65];

        let start = 7;
        let end = 66175;

        expect(minimumMultiplications(input, start, end)).toEqual(4);
    })

    test('case 3', () => {
        let input = [2, 5, 7];

        let start = 3;
        let end = 105;

        expect(minimumMultiplications(input, start, end)).toEqual(2);
    })

});