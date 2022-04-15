var DoublyLinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    let newNode = Node(value);
    if (list.head === null) {
      list.head = newNode;
    } else {
      let temp = list.head;
      while (temp.next !== null) {
        temp = temp.next;
      }
      temp = newNode;
    }
    list.tail = newNode;
  };

  list.removeHead = function() {
  };

  list.contains = function(target) {
  };

  list.addToHead = function(value) {
    // do me next!!
    let newNode = Node(value);
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