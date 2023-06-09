var findRedundantConnection = function (edges) {
    let map = new Map();
    let parent = new Map();

    for (let i = 0; i < edges.length; i++) {
        let u = edges[i][0];
        let v = edges[i][1];
        if (!map.has(u)) map.set(u, []);
        map.get(u).push(v);
        if (!map.has(v)) map.set(v, []);
        map.get(v).push(u);
    }

    const dfs = (node, parentNode) => {
        parent.set(node, parentNode);
        visited[node] = true;

        for (let i = 0; i < map.get(node).length; i++) {
            if (map.get(node)[i] !== parentNode && visited[map.get(node)[i]]) {
                return true;
            } else if (!visited[map.get(node)[i]]) {
                return dfs(map.get(node)[i], node);
            }
        }

        return false;
    }

    let visited = new Array(map.size).fill(false);


    for (let [key] of map) {
        if (!visited[key]) {
            let isCycle = dfs(key, -1);
            if (isCycle) {
                return true;
            }
        }
    }

    return false;
};

console.log(findRedundantConnection([[1, 2], [1, 3], [2, 3]]));

//Working when argument is edges