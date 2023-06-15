var getShortedPath = (N, M, edges) => {
    let distance = new Array(N).fill(10000000);
    let adj = [];
    let visited = new Array(N).fill(false);
    let stack = [];

    for (let i = 0; i < N; i++) {
        adj.push([]);
    }

    for (let i = 0; i < M; i++) {
        let u = edges[i][0];
        let v = edges[i][1];
        let wt = edges[i][2];
        adj[u].push({ first: v, second: wt });
    }

    for (let i = 0; i < N; i++) {
        if (!visited[i]) {
            topoSort(i, visited, adj, stack);
        }
    }

    distance[0] = 0;

    while (stack.length > 0) {
        let item = stack.pop();

        for (let pair of adj[item]) {
            let v = pair.first;
            let wt = pair.second;

            if (distance[item] + wt < distance[v]) {
                distance[v] = distance[item] + wt;
            }
        }
    }

    for (let i = 0; i < distance.length; i++) {
        if (distance[i] === 10000000) {
            distance[i] = -1;
        }
    }

    return distance;
}

const topoSort = (node, visited, adj, stack) => {
    visited[node] = true;
    for (let i = 0; i < adj[node].length; i++) {
        let j = adj[node][i].first;
        if (!visited[j]) {
            topoSort(j, visited, adj, stack);
        }
    }
    stack.push(node);
}

module.exports = getShortedPath;