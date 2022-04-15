describe('graph (using an array)', function() {
  var arrayGraph;

  beforeEach(function() {
    arrayGraph = new ArrayGraph();
  });

  it('should have methods named "addNode", "contains", "removeNode", "addEdge", "hasEdge", "removeEdge" and "forEachNode"', function() {
    expect(arrayGraph.addNode).to.be.a('function');
    expect(arrayGraph.contains).to.be.a('function');
    expect(arrayGraph.removeNode).to.be.a('function');
    expect(arrayGraph.hasEdge).to.be.a('function');
    expect(arrayGraph.addEdge).to.be.a('function');
    expect(arrayGraph.removeEdge).to.be.a('function');
    expect(arrayGraph.forEachNode).to.be.a('function');
  });

  it('should store values as nodes that were inserted', function() {
    arrayGraph.addNode(1);
    expect(arrayGraph.contains(1)).to.equal(true);
  });

  it('should remove nodes that were inserted', function() {
    arrayGraph.addNode(2);
    expect(arrayGraph.contains(2)).to.equal(true);
    arrayGraph.removeNode(2);
    expect(arrayGraph.contains(2)).to.equal(false);
  });

  it('should create edges between two nodes', function() {
    arrayGraph.addNode(2);
    arrayGraph.addNode(1);
    arrayGraph.addNode(3);
    arrayGraph.addEdge(3, 2);
    expect(arrayGraph.hasEdge(3, 2)).to.equal(true);
    expect(arrayGraph.hasEdge(3, 1)).to.equal(false);
  });

  it('should remove edges between nodes', function() {
    arrayGraph.addNode(4);
    arrayGraph.addNode(5);
    arrayGraph.addEdge(5, 4);
    expect(arrayGraph.hasEdge(4, 5)).to.equal(true);
    arrayGraph.removeEdge(5, 4);
    expect(arrayGraph.hasEdge(4, 5)).to.equal(false);
  });

  it('should remove edges between nodes when a node is removed', function() {
    arrayGraph.addNode(4);
    arrayGraph.addNode(5);
    arrayGraph.addEdge(5, 4);
    expect(arrayGraph.hasEdge(4, 5)).to.equal(true);
    arrayGraph.removeNode(5);
    expect(arrayGraph.hasEdge(4, 5)).to.equal(false);
  });

  it('should execute a callback on each node in the graph', function() {
    var connectToFive = function(item) {
      arrayGraph.addEdge(item, 5);
    };
    arrayGraph.addNode(5);
    arrayGraph.addNode(2);
    arrayGraph.addNode(1);
    arrayGraph.addNode(3);
    arrayGraph.forEachNode(connectToFive);
    expect(arrayGraph.hasEdge(2, 5)).to.equal(true);
    expect(arrayGraph.hasEdge(1, 5)).to.equal(true);
    expect(arrayGraph.hasEdge(3, 5)).to.equal(true);
    expect(arrayGraph.hasEdge(5, 5)).to.equal(true);
  });

  it('should not contain nodes never added to it', function() {
    arrayGraph.addNode(2);
    expect(arrayGraph.contains(4)).to.equal(false);
    expect(arrayGraph.contains(3)).to.equal(false);
    expect(arrayGraph.contains(10)).to.equal(false);
  });
});
