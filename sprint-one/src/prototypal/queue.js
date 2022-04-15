var Queue = function() {
  let newQueue = Object.create(queueMethods);
  newQueue.count = 0;
  newQueue.storage = {};

  return newQueue;
};

var queueMethods = {
  enqueue: function(value) {
    this[this.count] = value;
    this.count++;
  },

  dequeue: function() {
    if (!this.count) { return; }

    const dequeued = this[0];
    for (let i = 0; i < this.count - 1; i++) {
      this[i] = this[i + 1];
    }

    delete this.storage[this.count - 1];
    this.count--;

    return dequeued;
  },
  size: function() { return this.count; }
};