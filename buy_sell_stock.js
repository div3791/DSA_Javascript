function maxProfit(prices) {
    if (prices.length <= 0) return 0;

    let min = prices[0], max = 0, profit = 0;

    for (let price in prices) {
        min = Math.min(min, prices[price])
        profit = prices[price] - min;
        max = Math.max(profit, max)
    }
    return max;
}
let prices = [7, 1, 5, 3, 6, 4]
console.log(maxProfit(prices))