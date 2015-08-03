var LinkedList = function() {
  var linkedList = {};
  linkedList.head = null;
  linkedList.tail = null;

  linkedList.addToList = function(item) {

    // if list is empty
    if(linkedList.head === null) {
      // create new node
      linkedList.head = {};
      // assign item to new node.value
      linkedList.head.value = item;
      // assign null to new node.next
      linkedList.head.next = null;
      // assign tail pointer to new node
      linkedList.tail = linkedList.head;
    }

    // if list already exists
    else {
      // create new node
      linkedList.tail.next = {};
      // assign item to new node value
      linkedList.tail.next.value = item;
      // assign null to new node next
      linkedList.tail.next.next = null;
      // move tail pointer to new node
      linkedList.tail = linkedList.tail.next;
    }
  };

  linkedList.removeFromList = function() {
    // store value from head node
    var headValue = linkedList.head.value;
    // move head pointer to next node
    linkedList.head = linkedList.head.next;
    return headValue;
  };

  linkedList.findInList = function(item) {
    var node = linkedList.head;
    while(node.next !== null) {
          
      if(node.value === item) {
        return item;
      }
      
      else {
        node = node.next;
      }
    }
    
    return null;
  };

  return linkedList;
};