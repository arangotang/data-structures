// Instantiate a new graph
const Graph = function() {
  this.nodes = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  let newNode = {
    value: node,
    connections: {}
  };
  this.nodes[node] = newNode;
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  return this.nodes[node] !== undefined;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  if (!this.contains(node)) {
    return;
  }
  delete this.nodes[node];
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  if (!this.contains(fromNode) || !this.contains(toNode)) {
    return false;
  }
  let fromHasTo = this.nodes[fromNode].connections[toNode] !== undefined;
  let toHasFrom = this.nodes[toNode].connections[fromNode] !== undefined;
  return fromHasTo && toHasFrom;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.nodes[fromNode].connections[toNode] = this.nodes[toNode];
  this.nodes[toNode].connections[fromNode] = this.nodes[fromNode];
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  delete this.nodes[fromNode].connections[toNode];
  delete this.nodes[toNode].connections[fromNode];
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (let node in this.nodes) {
    cb(node);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 * addNode: O(1) - independent of number of nodes in graph
 * contains: O(1) - independent of number of nodes in graph
 * removeNode: O(1) - independent of number of nodes in graph
 * hasEdge: O(1) - independent of number of nodes in graph
 * addEdge: O(1) - independent of number of nodes in graph
 * removeEdge: O(1) - independent of number of nodes in graph
 * forEachNode: O(n) - iterates through each on n nodes in graph
 */