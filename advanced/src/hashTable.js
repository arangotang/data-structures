const HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this._count = 0;
};

HashTable.prototype.insert = function(k, v) {
  let index = this._storage.getIndexBelowMaxForKey(k, this._limit);
  this._storage.set(index, v);
  this._count++;
};

HashTable.prototype.retrieve = function(k) {
  let index = this._storage.getIndexBelowMaxForKey(k, this._limit);
  return this._storage.get(index);
};

HashTable.prototype.remove = function(k) {
  let index = this._storage.getIndexBelowMaxForKey(k, this._limit);
  this._storage.each(function(item, i, collection) {
    if (index === i) {
      delete collection[i];
    }
  });
  this._count--;
};

/*
 * Complexity: What is the time complexity of the above functions?
 * insert: O(n) - uses 'getIndexBelowMaxForKey' (O(n)) and 'set' (O(1)) helper functions, while the remainder of this function is O(1).
 * retrieve: O(n) - uses 'getIndexBelowMaxForKey' (O(n)) and 'get' (O(1)) helper functions, while the remainder of this function is O(1).
 * remove: O(n) - uses 'getIndexBelowMaxForKey' and 'each' helper functions which are both O(n), while the remainder of this function is constant time.
 */


