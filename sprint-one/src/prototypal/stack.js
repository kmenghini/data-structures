var Stack = function() {

  var instanceOf = Object.create(stackMethods);
  instanceOf.key = 0;
  instanceOf.storage = {};
  return instanceOf;
};

var stackMethods = {
  push: function(value) {
    this.storage[this.key] = value;
    this.key++;
  },
  pop: function() {
    this.key--;
    var item = this.storage[this.key];
    delete this.storage[this.key];
    return item;
  }, 
  size: function() {
    return Math.max(0, this.key);
  }
};


