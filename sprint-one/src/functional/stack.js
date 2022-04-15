const Stack = function() {
  let someInstance = {};
  let storage = {};
  let count = 0;

  someInstance.push = function(value) {
    storage[count] = value;
    count++;
  };

  someInstance.pop = function() {
    if (!count) { return; }

    const popped = storage[count - 1];
    delete storage[count - 1];
    count--;

    return popped;
  };

  someInstance.size = function() { return count; };

  return someInstance;
};
