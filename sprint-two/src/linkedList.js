var LinkedList = function() {
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
      temp.next = newNode;
    }

    list.tail = newNode;
  };

  list.removeHead = function() {
    let formerHead = list.head;
    list.head = list.head.next;
    return formerHead.value;
  };

  list.contains = function(target) {
    if (list.head.value === target) {
      return true;
    }

    let temp = list.head;
    while (temp.next !== null) {
      temp = temp.next;
      if (temp.value === target) {
        return true;
      }
    }
    return false;
  };

  return list;
};

var Node = function(value) {
  var node = {};
  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 *
 * addToTail: O(n) -> worst case (always): iterate through whole list of length n in order to reach the tail
 * removeHead: O(1) -> no iteration required, same regardless of input
 * contains: O(n) -> worst case: iterate through whole list of length n from head to tail to find if value is contained
 *
 */
