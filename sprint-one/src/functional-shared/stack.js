var Stack = function() {
  let someInstance = {storage: {}, count: 0};
  _.extend(someInstance, stackMethods);

  return someInstance;
};

var stackMethods = {
  push: function(value) {
    this.storage[this.count.toString()] = value;
    this.count++;
  },
  pop: function() {
    if (this.count === 0) {
      return;
    }
    const topKey = (this.count - 1).toString();
    const toBePopped = this.storage[topKey];
    delete this.storage[topKey];
    this.count--;
    return toBePopped;
  },
  size: function() {
    return this.count;
  }
};