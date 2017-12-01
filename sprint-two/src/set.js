var Set = function() {
  var set = Object.create(setPrototype);
  set.storage = []; // fix me
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  var exists = false;
  for (var i = 0; i < this.storage.length; i++) {
    if (this.storage[i] === item) {
      exists = true;
    }
  }
  if (exists === false) {
    this.storage.push(item);
  }
  //iterate through storage, comparing item, to elements
    //if item exists in set, don't add
    //else add
};

setPrototype.contains = function(item) {
  for (var i = 0; i < this.storage.length; i++) { 
    if (this.storage[i] === item) {
      return true;
    }
  }
  return false;
  //compare every element to item
    //if item === element return true
    //if last element !== item return false
};

setPrototype.remove = function(item) {
  for (var i = 0; i < this.storage.length; i++) {
    if (this.storage[i] === item) {
      this.storage.splice(i, 1);
    }
  }
  //look for item
    //delete item at index
};

/*
 * Complexity: add: O(n), contains: O(n), remove: O(n)
 */
