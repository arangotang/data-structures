var Stack = function() {
  let someInstance = {storage: {}};
  jQuery.extend(someInstance, stackMethods);

  return someInstance;
};

var stackMethods = {
  push: function(value) {
    this.storage[Object.keys(this.storage).length] = value;
  },
  pop: function() {
    let topKey = (Object.keys(this.storage).length - 1).toString();
    let toBePopped = this.storage[topKey];
    delete this.storage[topKey];
    return toBePopped;
  },
  size: function() {
    return Object.keys(this.storage).length;
  }
};