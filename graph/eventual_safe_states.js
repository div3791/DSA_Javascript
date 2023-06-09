var eventualSafeNodes = function (graph) {
    let visited = Array(graph.length).fill(false);
    let pathVisited = Array(graph.length).fill(false);
    let safeNodes = Array(graph.length).fill(false);
    let result = [];

    for (let i = 0; i < graph.length; i++) {
        if (!visited[i]) {
            dfs(i, graph, visited, pathVisited, safeNodes);
        }
        if (safeNodes[i]) {
            result.push(i);
        }
    }
    return result;
};

const dfs = (node, graph, visited, pathVisited, safeNodes) => {
    visited[node] = true;
    pathVisited[node] = true;
    safeNodes[node] = false;

    for (let i of graph[node]) {
        if (!visited[i]) {
            if (dfs(i, graph, visited, pathVisited, safeNodes)) return true;
        } else if (pathVisited[i]) {
            return true;
        }
    }

    pathVisited[node] = false;
    safeNodes[node] = true;
    return false;
}

module.exports = eventualSafeNodes;