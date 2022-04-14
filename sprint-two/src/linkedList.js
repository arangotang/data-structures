var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    // if (value === 4) {
    //   debugger;
    // }
    // add node of value to list
    let newNode = Node(value);
    // if no head
    if (list.head === null) {
      // add to head
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
    // check if value of head has target
    if (list.head.value === target) {
      return true;
    }
    // let some temp equal the head
    let temp = list.head;
    // while the temp's next node isn't null
    while (temp.next !== null) {
      // set temp to temp's next node
      temp = temp.next;
      // if temp's value equals the target
      if (temp.value === target) {
        return true;
      }
    }
    // return false
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
 */
