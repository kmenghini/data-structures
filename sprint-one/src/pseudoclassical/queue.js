var Queue = function() {
  this.storage = {};
  this.start = 0;
  this.key = 0;
};

Queue.prototype.enqueue = function(value) {
  this.storage[this.key] = value;
  this.key++;
};
Queue.prototype.dequeue = function() {
  var item = this.storage[this.start];
  delete this.storage[this.start];
  this.start++;
  return item;
};
Queue.prototype.size = function() {
  return Math.max(0, this.key - this.start);
};