class Queue {
  constructor() {
    this.storage = {};
    this.count = 0;
  }

  enqueue(value) {
    this.storage[this.count] = value;
    this.count++;
  }

  dequeue() {
    if (this.count === 0) {
      return;
    }

    const dequeued = this.storage['0'];
    for (let i = 0; i < this.count - 1; i++) {
      this.storage[i] = this.storage[i + 1];
    }
    delete this.storage[this.count - 1];
    this.count--;
    return dequeued;
  }

  size() {
    return this.count;
  }
}