var Stack = function() {
  var instanceOf = {
    key: 0,
    storage: {}
  };
  instanceOf.pop = stackMethods.pop;
  instanceOf.push = stackMethods.push;
  instanceOf.size = stackMethods.size;
  return instanceOf;
};

var stackMethods = {
  pop: function() {
    this.key--;
    var lastVal = this.storage[this.key];
    delete this.storage[this.key];
    return lastVal;
  },
  push: function(value) {
    this.storage[this.key] = value;
    this.key++;
  },
  size: function() {
    return Math.max(0, this.key);
  }
};


