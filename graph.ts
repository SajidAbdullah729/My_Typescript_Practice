class Graph {
  private adjList: Map<number, number[]>;

  constructor() {
    this.adjList = new Map();
  }

  // Add a vertex to the graph
  addVertex(vertex: number): void {
    if (!this.adjList.has(vertex)) {
      this.adjList.set(vertex, []);
    }
  }

  // Add an edge between two vertices
  addEdge(v1: number, v2: number): void {
    if (!this.adjList.has(v1)) {
      this.addVertex(v1);
    }
    if (!this.adjList.has(v2)) {
      this.addVertex(v2);
    }
    this.adjList.get(v1)?.push(v2);
    this.adjList.get(v2)?.push(v1); // For undirected graph
  }

  // Depth-First Search (DFS) recursive
  dfsRecursive(start: number): void {
    const visited = new Set<number>();
    this.dfsHelper(start, visited);
  }

  private dfsHelper(vertex: number, visited: Set<number>): void {
    console.log(vertex);
    visited.add(vertex);

    const neighbors = this.adjList.get(vertex);
    if (neighbors) {
      for (const neighbor of neighbors) {
        if (!visited.has(neighbor)) {
          this.dfsHelper(neighbor, visited);
        }
      }
    }
  }

  // Depth-First Search (DFS) iterative using stack
  dfsIterative(start: number): void {
    const visited = new Set<number>();
    const stack = [start];

    while (stack.length > 0) {
      const vertex = stack.pop()!;
      if (!visited.has(vertex)) {
        console.log(vertex);
        visited.add(vertex);

        const neighbors = this.adjList.get(vertex);
        if (neighbors) {
          for (const neighbor of neighbors) {
            if (!visited.has(neighbor)) {
              stack.push(neighbor);
            }
          }
        }
      }
    }
  }

  // Breadth-First Search (BFS) using a queue
  bfs(start: number): void {
    const visited = new Set<number>();
    const queue: number[] = [start];

    visited.add(start);

    while (queue.length > 0) {
      const vertex = queue.shift()!;
      console.log(vertex);

      const neighbors = this.adjList.get(vertex);
      if (neighbors) {
        for (const neighbor of neighbors) {
          if (!visited.has(neighbor)) {
            visited.add(neighbor);
            queue.push(neighbor);
          }
        }
      }
    }
  }
}

// Example usage:
const graph = new Graph();
graph.addEdge(1, 2);
graph.addEdge(1, 3);
graph.addEdge(2, 4);
graph.addEdge(3, 5);

console.log("DFS (Recursive):");
graph.dfsRecursive(1);

console.log("\nDFS (Iterative):");
graph.dfsIterative(1);

console.log("\nBFS:");
graph.bfs(1);
