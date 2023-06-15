var eventualSafeNodesBFS = function (graph) {

    let indegree = new Array(graph.length).fill(0);
    let reverseGraph = [];
    for (let i = 0; i < graph.length; i++) {
        reverseGraph.push([]);
    }

    for (let i = 0; i < graph.length; i++) {
        for (let j = 0; j < graph[i].length; j++) {
            reverseGraph[graph[i][j]].push(i);
            indegree[i]++;
        }
    }

    let queue = [];

    for (let i = 0; i < reverseGraph.length; i++) {
        if (indegree[i] == 0) {
            queue.push(i);
        }
    }

    let sorted = [];

    while (queue.length > 0) {
        let node = queue.shift();
        sorted.push(node);
        for (let i of reverseGraph[node]) {
            indegree[i]--;
            if (indegree[i] == 0) {
                queue.push(i);
            }
        }
    }

    sorted.sort((a, b) => a - b);

    return sorted.sort();
};

module.exports = eventualSafeNodesBFS;