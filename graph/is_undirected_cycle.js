class Solution {
    isCycle(V, adj) {
        this.visited = [];
        for (let i = 0; i < V; i++) {
            this.visited.push(false);
        }
        for (let i = 0; i < V; i++) {
            if (!this.visited[i]) {
                let cycleDetected = this._isCycle(adj, this.visited, i);
                if (cycleDetected) {
                    return true;
                }
            }
        }

        return false;
    }

    _isCycle(adj, visited, node) {
        let parent = new Map();
        parent.set(node, -1);

        let queue = [];
        queue.push(node);

        while (queue.length > 0) {
            let item = queue.shift();
            if (!visited[item]) {
                visited[item] = true;
                for (let i = 1; i < adj[item].length; i++) {
                    if (visited[adj[item][i]] === true && parent[item] !== adj[item][i]) {
                        return true;
                    }
                    else if (adj[item][i] < visited.length && !visited[adj[item][i]]) {
                        queue.push(adj[item][i]);
                        parent.set(adj[item][i], item);
                    }
                }

            }
        }
        return false;
    }
}

module.exports = Solution;