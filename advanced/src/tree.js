const Tree = function(value, parent) {
  let newTree = {};
  newTree.value = value;
  newTree.children = [];
  newTree.parent = parent || null;
  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value, parent) {
  let newChild = Tree(value, this);
  this.children.push(newChild);
};

treeMethods.contains = function(target) {
  if (this.value === target) { return true; }

  let containsTarget = false;
  for (let i = 0; i < this.children.length; i++) {
    containsTarget = containsTarget || this.children[i].contains(target);
  }

  return containsTarget;
};

treeMethods.removeFromParent = function() {
  // store this on a variable
  let orphan = this;
  // remove child from its parent's children array
  // iterate through child's parent's children array
  for (let i = 0; i < this.parent.children.length; i++) {
    // if current child has the same value as stored child
    if (this.parent.children[i].value === this.value) {
      // splice out of array
      this.parent.children.splice(i, 1);
      // break
      break;
    }
  }
  // set parent value on variable to null
  orphan.parent = null;
  // return variable
  return orphan;
};

treeMethods.traverse = function(cb) {
  cb(this.value);
  // check if it has children
  if (this.children.length > 0) {
    // iterate through children
    for (let i = 0; i < this.children.length; i++) {
      // recurse on child
      this.children[i].traverse(cb);
    }
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 * addChild: O(1) - same operation regardless of input / tree size
 * contains: O(n) - worst case: have to recurse through every child to find if its value matches target
 */
