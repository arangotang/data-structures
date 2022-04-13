var Queue = function() {
  this.storage = {};
  this.count = 0;
};

Queue.prototype.size = function() {
  return this.count;
};
Queue.prototype.enqueue = function(value) {
  this.storage[this.count] = value;
  this.count++;
};
Queue.prototype.dequeue = function() {
  if (this.count === 0) {
    return;
  }
  const dequeuedValue = this.storage['0'];
  for (let i = 0; i < this.count - 1; i++) {
    this.storage[i] = this.storage[i + 1];
  }
  delete this.storage[this.count - 1];
  this.count--;
  return dequeuedValue;
};