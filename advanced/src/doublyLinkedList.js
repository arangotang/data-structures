var DoublyLinkedList = function() {
  // idea: operations done to head are interfering w tail and vice versa when size of list is only 1
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    if (list.head === null) {
      let newTail = Node(value);
      list.head = newTail;
      list.tail = newTail;
    } else {
      let newTail = Node(value);
      list.tail.next = newTail;
      list.tail = newTail;
    }
  };

  list.addToHead = function(value) {
    if (list.head === null) {
      let newHead = Node(value);
      list.tail = newHead;
      list.head = newHead;
    } else {
      let newHead = Node(value);
      list.head.prev = newHead;
      list.head = newHead;
    }
  };

  list.removeHead = function() {
    if (list.head === null) {
      return;
    }
    let temp = list;
    if (list.head.next === null) {
      list.head = null;
      list.tail = null;
    } else {
      list.head = list.head.next;
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

  list.removeTail = function(value) {
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