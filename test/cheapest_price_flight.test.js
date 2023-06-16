const findCheapestPrice = require("../graph/cheapest_price_flight");

describe('Cheapest price flight', () => {

    test('case 1', () => {
        let input = [[0, 1, 100], [1, 2, 100], [2, 0, 100], [1, 3, 600], [2, 3, 200]];

        let src = 0;
        let dst = 3;
        let k = 1;

        expect(findCheapestPrice(4, input, src, dst, k)).toEqual(700);
    })

    test('case 2', () => {
        var input = [[0, 1, 100], [1, 2, 100], [0, 2, 500]]
        let src = 0;
        let dst = 2;
        let k = 1;
        expect(findCheapestPrice(3, input, src, dst, k)).toEqual(200);
    })

    test('case 3', () => {
        var input = [[0, 1, 100], [1, 2, 100], [0, 2, 500]]
        let src = 0;
        let dst = 2;
        let k = 0;
        expect(findCheapestPrice(3, input, src, dst, k)).toEqual(500);
    })
});
