var Stack = function() {
  var someInstance = {};
  var storage = {};
  let count = 0;

  someInstance.push = function(value) {
    storage[count] = value;
    count++;
  };
  someInstance.pop = function() {
    if (count === 0) {
      return;
    }
    const topKey = (count - 1).toString();
    const toBePopped = storage[topKey];
    delete storage[topKey];
    count--;
    return toBePopped;
  };
  someInstance.size = function() {
    return count;
  };

  return someInstance;
};
