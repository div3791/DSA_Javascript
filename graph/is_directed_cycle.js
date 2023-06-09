class Solution {
    // Function to detect cycle in a directed graph.
    isCyclic(V, adj) {
        let visited = new Array(V);
        let pathVisited = new Array(V);
        for (let i = 0; i < V; i++) {
            visited[i] = false;
            pathVisited[i] = false;
        }

        for (let i = 0; i < V; i++) {
            if (!visited[i]) {
                if (dfs(i, adj, visited, pathVisited)) {
                    return true;
                }
            }
        }
        return false;
    }
}

module.exports = Solution;

function dfs(node, adj, visited, pathVisited) {

    visited[node] = true;
    pathVisited[node] = true;

    for (let i = 0; i < adj[node].length; i++) {
        if (!visited[adj[node][i]] === true) {
            if (dfs(adj[node][i], adj, visited, pathVisited) === true) return true;
        } else if (pathVisited[adj[node][i]] === true) {
            return true;
        }
    }

    pathVisited[node] = false;
    return false;
}