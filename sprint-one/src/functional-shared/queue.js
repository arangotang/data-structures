const Queue = function() {
  let someInstance = {storage: {}, count: 0};
  _.extend(someInstance, queueMethods);

  return someInstance;
};

const queueMethods = {
  enqueue: function(value) {
    this.storage[this.count] = value;
    this.count++;
  },

  dequeue: function() {
    if (!this.count) { return; }

    const dequeued = this.storage[0];
    for (let i = 0; i < this.count - 1; i++) {
      this.storage[i] = this.storage[i + 1];
    }

    delete this.storage[this.count - 1];
    this.count--;

    return dequeued;
  },

  size: function() { return this.count; }
};