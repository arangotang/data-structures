const Stack = function() {
  let someInstance = {storage: {}, count: 0};
  _.extend(someInstance, stackMethods);

  return someInstance;
};

const stackMethods = {
  push: function(value) {
    this.storage[this.count] = value;
    this.count++;
  },

  pop: function() {
    if (!this.count) { return; }

    const popped = this.storage[this.count - 1];
    delete this.storage[this.count - 1];
    this.count--;

    return popped;
  },

  size: function() { return this.count; }
};