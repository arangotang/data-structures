const Queue = function() {
  let someInstance = {};
  let storage = {};
  let count = 0;

  someInstance.enqueue = function(value) {
    storage[count] = value;
    count++;
  };

  someInstance.dequeue = function() {
    if (!count) { return; }

    const dequeued = storage[0];
    for (let i = 0; i < count - 1; i++) {
      storage[i] = storage[i + 1];
    }
    delete storage[count - 1];
    count--;

    return dequeued;
  };

  someInstance.size = function() { return count; };

  return someInstance;
};