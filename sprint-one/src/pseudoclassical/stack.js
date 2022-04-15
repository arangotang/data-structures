var Stack = function() {
  this.storage = {};
  this.count = 0;
};

Stack.prototype.size = function() { return this.count; };

Stack.prototype.push = function(value) {
  this.storage[this.count] = value;
  this.count++;
};

Stack.prototype.pop = function() {
  if (!this.count) { return; }

  const poppedValue = this.storage[this.count - 1];
  delete this.storage[this.count - 1];
  this.count--;

  return poppedValue;
};