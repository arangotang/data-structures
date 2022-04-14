var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  newTree.children = [];
  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  let newChild = Tree(value);
  this.children.push(newChild);
};

treeMethods.contains = function(target) {
  if (this.value === target) {
    return true;
  }

  let containsTarget = false;

  for (let i = 0; i < this.children.length; i++) {
    containsTarget = containsTarget || this.children[i].contains(target);
  }
  return containsTarget;
};



/*
 * Complexity: What is the time complexity of the above functions?
 * addChild: O(1) - same operation regardless of input / tree size
 * contains: O(n) - worst case: have to recurse through every child to find if its value matches target
 */
