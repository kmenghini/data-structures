var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var newNode = Node(value);
    if (list.head === null) {
      list.head = newNode;
    } else {
      //prev tail's .next = value
      list.tail.next = newNode;
    }
    list.tail = newNode;
  };

  list.removeHead = function() {
    var returnValue = list.head;
    list.head = returnValue.next;
    return returnValue.value;
  };

  list.contains = function(target, currentList) {
    currentList = currentList || list;
    if (currentList.head.value === target) { 
      return true;
    } else if (currentList.head.next === null) {
      return false;
    } else {
      var nextList = LinkedList();
      nextList.head = currentList.head.next;
      return currentList.contains(target, nextList);
    }
  };
  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};
//addToTail and removeHead have 0(1) (constant) complexity.
//contains has 0(n) complexity