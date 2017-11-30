var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  someInstance.storage = {};
  someInstance.key = 0;
  someInstance.start = 0;
  someInstance.enqueue = queueMethods.enqueue;
  someInstance.dequeue = queueMethods.dequeue;
  someInstance.size = queueMethods.size;
  return someInstance; 
};

var queueMethods = {
  enqueue: function(value) {
    this.storage[this.key] = value;
    this.key++;
  },
  dequeue: function() {
    var storageVar = this.storage[this.start]; 
    delete this.storage[this.start];
    this.start++;
    return storageVar;
  },
  size: function() {
    return Math.max(0, this.key - this.start);
  }
};


