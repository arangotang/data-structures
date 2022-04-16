var BinarySearchTree = function(value) {
  this.value = value;
  this.left = null;
  this.right = null;
};

BinarySearchTree.prototype.insert = function(value) {
  let newTree = new BinarySearchTree(value);
  if (this.value < value) {
    if (this.right === null) {
      this.right = newTree;
    } else {
      this.right.insert(value);
    }
  } else if (this.left === null) {
    this.left = newTree;
  } else {
    this.left.insert(value);
  }
};

BinarySearchTree.prototype.contains = function(value) {
  if (value === this.value) {
    return true;
  } else if (this.value < value && this.right !== null) {
    return this.right.contains(value);
  } else if (this.value > value && this.left !== null) {
    return this.left.contains(value);
  }
  return false;
};

BinarySearchTree.prototype.depthFirstLog = function(cb) {
  cb(this.value);
  if (this.left !== null) {
    this.left.depthFirstLog(cb);
  }

  if (this.right !== null) {
    this.right.depthFirstLog(cb);
  }
};

BinarySearchTree.prototype.breadthFirstLog = function(cb) {
  cb(this.value);
  let level = [this];
  while (level.length !== 0) {
    let oldLevel = level;
    level = [];
    for (let i = 0; i < oldLevel.length; i++) {
      if (oldLevel[i].left !== null) {
        cb(oldLevel[i].left.value);
        level.push(oldLevel[i].left);
      }
      if (oldLevel[i].right !== null) {
        cb(oldLevel[i].right.value);
        level.push(oldLevel[i].right);
      }
    }
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 *
 * insert: O(n) - since this does not restructure, the worst case would be a tree that is just one long zig zag...
 *   small scale example: let tree = BinarySearchTree(-100), tree.insert(100), tree.insert(-99), tree.insert(99), etc
 *
 * contains: O(n) - if you take the above example as a given, executing contains for a non-existent element would take n exections
 *
 * depthFirstLog: O(n) - worst case = best case -- need to iterate through whole tree to successfully call this
 */