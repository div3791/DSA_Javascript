var isBipartite = function (graph) {

    let colored = new Array(graph.length).fill(-1);

    for (let i = 0; i < graph.length; i++) {
        if (colored[i] === -1) {
            if (!bfs(i, graph, colored)) {
                return false;
            }
        }
    }


    return true;
};

const bfs = (node, graph, colored) => {

    let queue = [];
    queue.push(node);
    colored[node] = 0;

    while (queue.length > 0) {
        let item = queue.shift();
        for (let i of graph[item]) {
            if (colored[i] === -1) {
                colored[i] = 1 - colored[item];
                queue.push(i);
            } else if (colored[i] === colored[item]) {
                return false;
            }
        }
    }

    return true;
}

module.exports = isBipartite;