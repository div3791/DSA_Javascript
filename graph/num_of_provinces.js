class Solution {
    numProvinces(graph) {
        let n = graph.length;
        let counter = 0;
        let visited = new Array(n).fill(false);

        const dfs = (node) => {
            visited[node] = true;
            for (let i = 0; i < n; i++) {
                if (graph[node][i] === 1 && !visited[i]) {
                    dfs(i);
                }
            }
        }

        for (let i = 0; i < n; i++) {
            if (visited[i] === false) {
                counter++;
                dfs(i);
            }
        }

        return counter;
    }
}

module.exports = Solution;