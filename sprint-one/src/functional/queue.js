var Queue = function() {
  var someInstance = {};

  var storage = {};
  let count = 0;

  someInstance.enqueue = function(value) {
    storage[count] = value;
    count++;
  };

  someInstance.dequeue = function() {
    if (count === 0) {
      return;
    }
    const toBeDequeued = storage['0'];
    for (let i = 0; i < count - 1; i++) {
      storage[i.toString()] = storage[(i + 1).toString()];
    }
    delete storage[(count - 1).toString()];
    count--;
    return toBeDequeued;
  };

  someInstance.size = function() {
    return count;
  };

  return someInstance;
};