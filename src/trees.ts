export const bfs = (graph, startNode) => {
  const visited = new Set();
  const queue = [startNode];

  visited.add(startNode);
  while (visited.size > 0) {
    const currentNode = queue.shift();

    // THREAT NODE
    console.log(currentNode);

    for (let neighbor of graph[currentNode]) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push(neighbor);
      }
    }
  }
};

export const dfs = (graph, startNode, visited = new Set()) => {
  visited.add(startNode);

  // THREAT NODE
  console.log(startNode);

  for (let neighbor of graph[startNode]) {
    if (!visited.has(neighbor)) {
      dfs(graph, neighbor, visited);
    }
  }
};
