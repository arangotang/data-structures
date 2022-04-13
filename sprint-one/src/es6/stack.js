class Stack {
  constructor() {
    this.storage = {};
    this.count = 0;
  }

  push(value) {
    this.storage[this.count] = value;
    this.count++;
  }

  pop() {
    if (this.count === 0) {
      return;
    }

    const popped = this.storage[this.count - 1];
    delete this.storage[this.count - 1];
    this.count--;
    return popped;
  }

  size() {
    return this.count;
  }
}