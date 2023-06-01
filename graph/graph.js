class Graph {
  constructor(vertises, edges) {
    this._graph = new Map();
    for (let i = 0; i < vertises; i++) {
      this._graph.set(i, []);
    }
    for (let j = 0; j < edges.length; j++) {
      this.addEdge(edges[j][0], edges[j][1], false);
    }
  }

  addEdge(u, v, directed) {
    this._graph.get(u).push(v);
    if (!directed) {
      this._graph.get(v).push(u);
    }
  }

  display() {
    console.log(this._graph);
  }
}

const graph = new Graph(5, [
  [0, 1],
  [1, 2],
  [2, 3],
  [3, 1],
  [3, 4],
  [0, 4],
  [4, 1],
]);

graph.display();
