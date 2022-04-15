// Instantiate a new graph
const ArrayGraph = function() {
  this.nodes = [];
};

// Add a node to the graph, passing in the node's value.
ArrayGraph.prototype.addNode = function(node) {
  let newNode = {
    value: node,
    connections: []
  };

  this.nodes[node] = newNode;
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
ArrayGraph.prototype.contains = function(node) {
  if (typeof this.nodes[node] === 'object') {
    return true;
  }
  return false;
};

// Removes a node from the graph.
ArrayGraph.prototype.removeNode = function(node) {
  delete this.nodes[node];
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
ArrayGraph.prototype.hasEdge = function(fromNode, toNode) {
  if (typeof this.nodes[fromNode] === 'object' && typeof this.nodes[toNode] === 'object') {
    let fromHasTo = typeof this.nodes[fromNode].connections[toNode] === 'object';
    let toHasFrom = typeof this.nodes[toNode].connections[fromNode] === 'object';

    return (fromHasTo && toHasFrom) === true;
  }
  return false;
};

// Connects two nodes in a graph by adding an edge between them.
ArrayGraph.prototype.addEdge = function(fromNode, toNode) {
  if (typeof this.nodes[fromNode] === 'object' && typeof this.nodes[toNode] === 'object') {
    this.nodes[fromNode].connections[toNode] = this.nodes[toNode];
    this.nodes[toNode].connections[fromNode] = this.nodes[fromNode];
  }
};

// Remove an edge between any two specified (by value) nodes.
ArrayGraph.prototype.removeEdge = function(fromNode, toNode) {
  this.nodes[toNode].connections[fromNode] && delete this.nodes[toNode].connections[fromNode];
  this.nodes[fromNode].connections[toNode] && delete this.nodes[fromNode].connections[toNode];
};

// Pass in a callback which will be executed on each node of the graph.
ArrayGraph.prototype.forEachNode = function(cb) {
  for (let i = 0; i < this.nodes.length; i++) {
    this.nodes[i] && cb(this.nodes[i].value);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

