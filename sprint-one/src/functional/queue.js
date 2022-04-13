var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[Object.keys(storage).length] = value;
  };

  someInstance.dequeue = function() {
    const toBeDequeued = storage['0'];
    let l = Object.keys(storage).length;
    let temp;
    for (let i = 0; i < l; i++) {
      storage[i.toString()] = storage[(i + 1).toString()];
    }
    delete storage[(l - 1).toString()];
    return toBeDequeued;
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};