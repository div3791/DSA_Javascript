var shortestPathUndirected = (n, m, src, edges) => {
    let adj = [];
    for (let i = 0; i < n; i++) {
        adj.push([]);
    }

    for (let i = 0; i < m; i++) {
        adj[edges[i][0]].push(edges[i][1]);
        adj[edges[i][1]].push(edges[i][0]);
    }

    let distance = [];
    for (let i = 0; i < n; i++) {
        distance[i] = 1e9;
    }

    distance[src] = 0;
    let queue = [];
    queue.push(src);

    while (queue.length > 0) {
        let item = queue.shift();

        for (let i of adj[item]) {
            if (distance[item] + 1 < distance[i]) {
                distance[i] = distance[item] + 1;
                queue.push(i);
            }
        }
    }

    for (let i = 0; i < n; i++) {
        if (distance[i] == 1e9) {
            distance[i] = -1;
        }
    }

    return distance;
}

module.exports = shortestPathUndirected;