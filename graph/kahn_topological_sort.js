class Solution {
    topoSort(V, adj) {
        let indegrees = [];
        let ans = new Array(V);
        let queue = [];

        for (let i = 0; i < V; i++) {
            for (let j of adj[i]) {
                indegrees[j]++;
            }
        }

        for (let i = 0; i < V; i++) {
            if (indegrees[i] === 0) {
                queue.push(i);
            }
        }

        let i = 0;
        while (queue.length > 0) {
            let item = queue.pop();
            ans[i++] = item;

            for (let j of adj[i]) {
                indegrees[j]--;
                if (indegrees[j] === 0) {
                    queue.push(j);
                }
            }
        }

        return ans;
    }
}