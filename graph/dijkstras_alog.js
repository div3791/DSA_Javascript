var dijkstra = (V, Adj, S) => {
    let set = new Set();
    let distances = new Array(V).fill(10000000);
    set.add({ dist: 0, node: S })
    distances[S] = 0;

    while (set.size > 0) {
        let [item] = set;
        let node = item.node;
        let dt = item.dist;

        set.delete(item);

        for (let i of Adj[node]) {
            let adjNode = i[0];
            let wt = i[1];

            if (dt + wt < distances[adjNode]) {
                if (distances[adjNode] !== 10000000) {
                    set.forEach(item => item.dist === distances[adjNode] && item.node === adjNode && set.delete(item));
                }

                distances[adjNode] = dt + wt;
                set.add({ dist: distances[adjNode], node: adjNode });
            }
        }
    }

    return distances;
}
module.exports = dijkstra;
