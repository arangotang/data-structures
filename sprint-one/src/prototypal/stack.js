const Stack = function() {
  let newStack = Object.create(stackMethods);

  newStack.storage = {};
  newStack.count = 0;

  return newStack;
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
