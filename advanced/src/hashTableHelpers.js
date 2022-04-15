/*
 ********** NOTE: **********
 * Do not edit this code unless you see a bug!
 */


// This class represents an array with limited functionality and a maximum size.
// It will ensure that you don't accidentally try to use up too much space.
//
// Usage:
//   limitedArray.set(3, 'hi');
//   limitedArray.get(3); // returns 'hi'

var LimitedArray = function(limit) {
  var storage = [];

  var limitedArray = {};
  limitedArray.get = function(index) {
    limitedArray.checkLimit(index);
    return storage[index];
  };
  limitedArray.set = function(index, value) {
    limitedArray.checkLimit(index);
    storage[index] = value;
  };
  limitedArray.each = function(callback) {
    for (var i = 0; i < storage.length; i++) {
      callback(storage[i], i, storage);
    }
  };

  limitedArray.checkLimit = function(index) {
    if (typeof index !== 'number') {
      throw new Error('setter requires a numeric index for its first argument');
    }
    if (limit <= index) {
      throw new Error('Error trying to access an over-the-limit index');
    }
  };

  // This is a "hashing function". You don't need to worry about it, just use it
  // to turn any string into an integer that is well-distributed between the
  // numbers 0 and `max`
  limitedArray.getIndexBelowMaxForKey = function(str, max) {
    var hash = 0;
    for (var i = 0; i < str.length; i++) {
      hash = (hash << 5) + hash + str.charCodeAt(i);
      hash = hash & hash; // Convert to 32bit integer
      hash = Math.abs(hash);
    }
    return hash % max;
  };

  return limitedArray;
};


/*
 * Complexity: What is the time complexity of the above functions?
 * limitedArray.get - O(1): time is independent of input
 * limitedArray.set - O(1): time is independent of input
 * limitedArray.each - O(n): time is dependent of iteration through n = length of array
 * checkLimit - O(1): time is independent of input
 * getIndexBelowMaxForKey - O(n): time is linearly dependent on n = string length
 */
