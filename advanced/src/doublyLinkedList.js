var DoublyLinkedList = function() {
  // idea: operations done to head are interfering w tail and vice versa when size of list is only 1
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    let newTail = Node(value);
    if (list.head === null) {
      list.head = newTail;
    } else {
      list.tail.next = newTail;
      newTail.prev = list.tail;
    }
    list.tail = newTail;
  };

  list.addToHead = function(value) {
    let newHead = Node(value);
    if (list.head === null) {
      list.tail = newHead;
    } else {
      list.head.prev = newHead;
      newHead.next = list.head;
    }
    list.head = newHead;
  };

  list.removeHead = function() {
    if (list.head === null) {
      return;
    }
    let temp = list.head;
    if (list.head.next === null) {
      list.head = null;
      list.tail = null;
    } else {
      let headToBe = list.head.next;
      headToBe.prev = null;
      list.head = headToBe;
    }
    return temp;
  };

  list.removeTail = function(value) {
    if (list.tail === null) {
      return;
    }
    let temp = list.tail;
    if (list.tail.prev === null) {
      list.head = null;
      list.tail = null;
    } else {
      let tailToBe = list.tail.prev;
      tailToBe.next = null;
      list.tail = tailToBe;
    }
    return temp;
  };

  list.contains = function(target) {
    console.log(list);
    if (list.head === null) {
      return false;
    } else if (list.head.value === target) {
      return true;
    } else {
      let temp = list.head;
      while (temp.next !== null) {
        temp = temp.next;
        if (temp.value === target) {
          return true;
        }
      }
      return false;
    }
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;
  node.prev = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */