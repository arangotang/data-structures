var Queue = function() {
  let someInstance = {storage: {}};
  jQuery.extend(someInstance, queueMethods);

  return someInstance;
};

var queueMethods = {
  enqueue: function(value) {
    this.storage[Object.keys(this.storage).length] = value;
  },
  dequeue: function() {
    const toBeDequeued = this.storage['0'];
    let l = Object.keys(this.storage).length;
    for (let i = 0; i < l - 1; i++) {
      this.storage[i.toString()] = this.storage[(i + 1).toString()];
    }
    delete this.storage[(l - 1).toString()];
    return toBeDequeued;
  },
  size: function() {
    return Object.keys(this.storage).length;
  }
};