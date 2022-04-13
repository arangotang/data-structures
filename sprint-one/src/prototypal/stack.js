var Stack = function() {
  let newStack = Object.create(stackMethods);

  newStack.storage = {};
  newStack.count = 0;

  return newStack;
};

var stackMethods = {
  storage: {},
  count: 0,
  push: function(value) {
    this.storage[this.count] = value;
    this.count++;
  },
  pop: function() {
    if (this.count === 0) {
      return;
    }
    const poppedValue = this.storage[this.count - 1];
    this.count--;
    return poppedValue;
  },
  size: function() {
    return this.count;
  }
};
