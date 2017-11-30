var Queue = function() {
  var instanceOf = Object.create(queueMethods);
  instanceOf.key = 0;
  instanceOf.start = 0;
  instanceOf.storage = {};
  return instanceOf;
};

var queueMethods = {
  enqueue: function(value) {
    this.storage[this.key] = value;
    this.key++;
  },
  dequeue: function() {
    
    var item = this.storage[this.start];
    delete this.storage[this.start];
    this.start++;
    return item;
  },
  size: function() {
    return Math.max(this.key - this.start, 0);
  }
};


// var Queue = function() {
//   var instanceOf = Object.create(Queue.prototype);
//   instanceOf.key = 0;
//   instanceOf.start = 0;
//   instanceOf.storage = {};
//   return instanceOf;
// };

// Queue.prototype.enqueue = function(value) {
//   this.storage[this.key] = value;
//   this.key++;
// };
// Queue.prototype.dequeue = function() {
    
//   var item = this.storage[this.start];
//   delete this.storage[this.start];
//   this.start++;
//   return item;
// };
// Queue.prototype.size = function() {
//   return Math.max(this.key - this.start, 0);
// };


