var findCheapestPrice = function (n, flights, src, dst, k) {
    if (src === dst) return 0;

    let prices = Array(n).fill(10000000);
    prices[src] = 0;

    for (let i = 0; i <= k; i++) {
        let distances = [...prices];
        for (let flight of flights) {
            let from = flight[0];
            let to = flight[1];
            let cost = flight[2];

            if (prices[from] === 10000000) continue;

            if (prices[from] + cost < distances[to]) {
                distances[to] = prices[from] + cost;
            }
        }

        prices = distances;
    }

    return prices[dst] === 10000000 ? -1 : prices[dst];
};

module.exports = findCheapestPrice;