var minimumMultiplications = (arr, start, end) => {

    let queue = [];
    let distances = Array(100000).fill(10000000);
    let mod = 100000;

    queue.push({ steps: 0, node: start });

    distances[start] = 0;

    while (queue.length > 0) {
        let { steps, node } = queue.shift();

        for (let i of arr) {
            let num = (i * node) % mod;
            if (steps + 1 < distances[num]) {
                distances[num] = steps + 1;
                if (num === end) return steps + 1;
                queue.push({ steps: steps + 1, node: num });
            }
        }
    }

    return -1;
}

module.exports = minimumMultiplications;