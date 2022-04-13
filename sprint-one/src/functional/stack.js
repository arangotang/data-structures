var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // add string to top of stack
  someInstance.push = function(value) {
    storage[Object.keys(storage).length.toString()] = value;
  };
  // remove and return the string on the top of the stack
  someInstance.pop = function() {
    let topKey = (Object.keys(storage).length - 1).toString();
    let toBePopped = storage[topKey];
    delete storage[topKey];
    return toBePopped;
  };
  // return the number of items on the stack
  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};
