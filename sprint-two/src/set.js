var Set = function() {
  var set = Object.create(setPrototype);
  set.storage = [];
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  if (!this.contains(item)) {
    this.storage.push(item);
  }    
};

setPrototype.contains = function(item) {

  return this.storage.reduce(function(exists, element) {
    return exists || (item === element);
  }, false);
};

setPrototype.remove = function(item) {
  for (var i = 0; i < this.storage.length; i++) {
    if (this.storage[i] === item) {
      this.storage.splice(i, 1);
    }
  }
};

/*
 * Complexity: add: O(n), contains: O(n), remove: O(n)
 */
