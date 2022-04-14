

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = this._storage.getIndexBelowMaxForKey(k, this._limit);
  this._storage.set(index, v);
};

HashTable.prototype.retrieve = function(k) {
  var index = this._storage.getIndexBelowMaxForKey(k, this._limit);
  // debugger;
  return this._storage.get(index);
};

HashTable.prototype.remove = function(k) {
  var index = this._storage.getIndexBelowMaxForKey(k, this._limit);
  this._storage.each(function(item, i, collection) {
    if (index === i) {
      collection.splice(i, 1);
    }
  });
};



/*
 * Complexity: What is the time complexity of the above functions?
 * insert: O(n) - uses 'getIndexBelowMaxForKey' (O(n)) and 'set' (O(1)) helper functions, while the remainder of this function is O(1).
 * retrieve: O(n) - uses 'getIndexBelowMaxForKey' (O(n)) and 'get' (O(1)) helper functions, while the remainder of this function is O(1).
 * remove: O(n) - uses 'getIndexBelowMaxForKey' and 'each' helper functions which are both O(n), while the remainder of this function is constant time.
 */


