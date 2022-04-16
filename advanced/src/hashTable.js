const HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this._count = 0;
};

HashTable.prototype.insert = function(k, v) {
  let index = this._storage.getIndexBelowMaxForKey(k, this._limit);
  this._storage.set(index, [k, v]);
  this._count++;
  this.checkSize();
};

HashTable.prototype.retrieve = function(k) {
  let index = this._storage.getIndexBelowMaxForKey(k, this._limit);
  if (this._storage.get(index) === undefined) {
    return;
  }
  return this._storage.get(index)[1];
};

HashTable.prototype.remove = function(k) {
  let index = this._storage.getIndexBelowMaxForKey(k, this._limit);
  this._storage.each(function(item, i, collection) {
    if (index === i) {
      delete collection[i];
    }
  });
  this._count--;
  this.checkSize();
};

HashTable.prototype.checkSize = function() {
  let isTooSmall = this._count >= 0.75 * this._limit;
  let isTooBig = this._count < 0.25 * this._limit;
  if (isTooBig || isTooSmall) {
    let newLimit;
    if (isTooSmall) {
      newLimit = 2 * this._limit;
    } else {
      newLimit = 0.5 * this._limit;
    }
    var newStorage = LimitedArray(newLimit);
    this._storage.each(function(item, i, collection) {
      if (item !== undefined) {
        let newIndex = newStorage.getIndexBelowMaxForKey(item[0], newLimit);
        newStorage.set(newIndex, [item[0], item[1]]);
      }
    });
    this._limit = newLimit;
    this._storage = newStorage;
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 * insert: O(n) - uses 'getIndexBelowMaxForKey' (O(n)) and 'set' (O(1)) helper functions, while the remainder of this function is O(1).
 * retrieve: O(n) - uses 'getIndexBelowMaxForKey' (O(n)) and 'get' (O(1)) helper functions, while the remainder of this function is O(1).
 * remove: O(n) - uses 'getIndexBelowMaxForKey' and 'each' helper functions which are both O(n), while the remainder of this function is constant time.
 * checkSize: O(n) - iterates through everything in the list to re-populate new ht
 */


