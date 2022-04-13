var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
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
    if (this.count === 0) {
      return;
    }

    const dequeuedValue = this['0'];
    for (let i = 0; i < this.count - 1; i++) {
      this[i.toString()] = this[(i + 1).toString()];
    }
    this.count--;
    return dequeuedValue;

  },
  size: function() {
    return this.count;
  },
};


