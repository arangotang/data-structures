describe('tree w/ parent', function() {
  var tree;

  beforeEach(function() {
    tree = Tree();
  });

  it('should have methods named "addChild", "contains", "removeFromParent", and "traverse", and properties named "value" and "parent"', function() {
    expect(tree.addChild).to.be.a('function');
    expect(tree.contains).to.be.a('function');
    expect(tree.removeFromParent).to.be.a('function');
    expect(tree.traverse).to.be.a('function');
    expect(tree.hasOwnProperty('value')).to.equal(true);
    expect(tree.hasOwnProperty('parent')).to.equal(true);
  });

  it('should return null for parent of topmost tree', function() {
    expect(tree.parent).to.equal(null);
  });

  it('should refer to parent node of a child tree', function() {
    tree.addChild(5);
    expect(tree.children[0].parent).to.equal(tree);
  });

  it('should add children to the tree', function() {
    tree.addChild(5);
    expect(tree.children[0].value).to.equal(5);
  });

  it('should return true for a value that the tree contains', function() {
    tree.addChild(5);
    expect(tree.contains(5)).to.equal(true);
  });

  it('should return false for a value that was not added', function() {
    tree.addChild(5);
    expect(tree.contains(6)).to.equal(false);
  });

  it('should be able to add children to a tree\'s child', function() {
    tree.addChild(5);
    tree.children[0].addChild(6);
    expect(tree.children[0].children[0].value).to.equal(6);
  });

  it('should correctly detect nested children', function() {
    tree.addChild(5);
    tree.addChild(6);
    tree.children[0].addChild(7);
    tree.children[1].addChild(8);
    expect(tree.contains(7)).to.equal(true);
    expect(tree.contains(8)).to.equal(true);
  });

  it('contains should not work with an input of type string', function() {
    tree.addChild(5);
    tree.addChild(6);
    tree.children[0].addChild(7);
    tree.children[1].addChild(8);
    expect(tree.contains('7')).to.equal(false);
    expect(tree.contains('8')).to.equal(false);
  });

  it('should should remove child from parent', function() {
    tree.addChild(5);
    tree.children[0].removeFromParent();
    expect(tree.contains(5)).to.equal(false);
  });

  it('should parentless return child when removed from parent', function() {
    tree.addChild(5);
    tree.children[0].addChild(6);
    tree.children[0].addChild(7);
    let childCopy = Tree(5);
    childCopy.addChild(6);
    childCopy.addChild(7);
    expect(tree.children[0].removeFromParent()).to.eql(childCopy);
    expect(childCopy.parent).to.equal(null);
  });

  it('should not contain former child nor its children after being removed', function() {
    tree.addChild(5);
    tree.children[0].addChild(6);
    tree.children[0].addChild(7);
    tree.children[0].removeFromParent();
    expect(tree.contains(6)).to.equal(false);
    expect(tree.contains(7)).to.equal(false);
    expect(tree.contains(5)).to.equal(false);
  });

  it('should accept a callback and execute it on every value contained in the tree', function() {
    tree = Tree(4);
    tree.addChild(5);
    tree.children[0].addChild(6);
    tree.children[0].children[0].addChild(9);
    tree.children[0].addChild(7);
    let array = [];
    const func = function(value) {
      array.push(value);
    };
    tree.traverse(func);
    expect(array).to.eql([4, 5, 6, 9, 7]);
  });

});
