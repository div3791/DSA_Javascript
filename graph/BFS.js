const printAdjacency = require("./print_undirected_graph");

function BFS(graph, item, result = [], visited = []) {
  let queue = [];

  queue.push(item);
  while (queue.length > 0) {
    let item = queue.shift();
    if (!visited[item]) {
      result.push(item);
      visited[item] = true;
      for (let i = 0; i < graph.get(item)?.length; i++) {
        if (
          visited[graph.get(item)[i]] !== undefined &&
          !visited[graph.get(item)[i]]
        )
          queue.push(graph.get(item)[i]);
      }
    }
  }

  return result;
}

const input = printAdjacency(4, [
  [4, 4],
  [0, 1],
  [0, 3],
  [1, 2],
  [2, 3],
]);
console.log(input);
let visited = [];
for (let i = 0; i < 4; i++) {
  visited[i] = false;
}
let result = [];
for (let i = 0; i < 4; i++) {
  if (!visited[i]) {
    BFS(input, i, result, visited);
  }
}

console.log(result);
