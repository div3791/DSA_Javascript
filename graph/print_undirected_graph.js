function printAdjacency(n, edges) {
  let graph = new Map();
  for (let i = 0; i < n; i++) {
    graph.set(i, []);
  }
  for (let i = 0; i < edges.length; i++) {
    let u = edges[i][0];
    let v = edges[i][1];
    graph.get(u)?.push(v);
    graph.get(v)?.push(u);
  }
  return graph;
}

module.exports = printAdjacency;

// console.log(
//   printAdjacency(8, [
//     [0, 1],
//     [1, 2],
//     [2, 3],
//     [3, 1],
//     [3, 4],
//     [0, 4],
//     [4, 1],
//     [5, 6],
//     [5, 7],
//   ])
// );
