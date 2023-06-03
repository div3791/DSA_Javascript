class Solution {
    dfsOfGraph(V, adj) {
        this.result = [];
        this.visited = [];
        if (adj.length <= 0) return result;
        for (let i = 0; i < V; i++) {
            this.visited.push(false);
        }

        for (let i = 0; i < V; i++) {
            if (!this.visited[i]) {
                this.dfs(adj, i, this.visited, this.result);
            }
        }
        return this.result;
    }

    dfs(adj, node, visited, result) {
        result.push(node);
        visited[node] = true;

        for (let i = 0; i < adj[node].length; i++) {
            if (adj[node][i] < visited.length && !visited[adj[node][i]]) {
                this.dfs(adj, adj[node][i], visited, result);
            }
        }
    }
}

module.exports = Solution;
