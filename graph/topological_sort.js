class Solution {
    //Function to return list containing vertices in Topological order.
    topoSort(V, adj) {
        let visited = new Array(V).fill(false);
        let stack = [];

        for (let i = 0; i < adj.length; i++) {
            if (!visited[i]) {
                this.dfs(i, visited, adj, stack);
            }
        }

        let ans = [];

        while (stack.length > 0) {
            ans.push(stack.pop());
        }
        return ans;
    }

    dfs(node, visited, adj, stack) {
        visited[node] = true;
        for (let i = 0; i < adj[node].length; i++) {
            if (!visited[adj[node][i]]) {
                this.dfs(adj[node][i], visited, adj, stack);
            }
        }
        stack.push(node);
    }
}

module.exports = Solution;