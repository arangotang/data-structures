var Queue = function() {
  let someInstance = {storage: {}, count: 0};
  _.extend(someInstance, queueMethods);
  return someInstance;
};

var queueMethods = {
  enqueue: function(value) {
    this.storage[(this.count).toString()] = value;
    this.count++;
  },
  dequeue: function() {
    if (this.count === 0) {
      return;
    }
    const toBeDequeued = this.storage['0'];
    for (let i = 0; i < this.count - 1; i++) {
      this.storage[i.toString()] = this.storage[(i + 1).toString()];
    }
    delete this.storage[(this.count - 1).toString()];
    this.count--;
    return toBeDequeued;
  },
  size: function() {
    return this.count;
  }
};