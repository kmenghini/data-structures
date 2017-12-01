

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {

  var index = getIndexBelowMaxForKey(k, this._limit);
  if (!Array.isArray(this._storage.get(index))) {
    this._storage.set(index, []);
  }
  var exists = false;
  for (var i = 0; i < this._storage.get(index).length; i++) {
    if (this._storage.get(index)[i][0] === k) {
      this._storage.get(index)[i] = [k, v];
      exists = true;
    }
  }
  if (exists === false) {
    this._storage.get(index).push([k, v]); 
  }
};

HashTable.prototype.retrieve = function(k) {

  var index = getIndexBelowMaxForKey(k, this._limit);
  for (var i = 0; i < this._storage.get(index).length; i++) {
    if (this._storage.get(index)[i][0] === k) {
      return this._storage.get(index)[i][1];
    }
  }
};

HashTable.prototype.remove = function(k) {

  var index = getIndexBelowMaxForKey(k, this._limit);
  for (var i = 0; i < this._storage.get(index).length; i++) {
    if (this._storage.get(index)[i][0] === k) {
      this._storage.get(index).splice(i, 1);
    }
  }
};



/*
 * Complexity: insert: at best O(1) at worst O(n), retrieve: at best O(1) at worst O(n), remove: at best O(1) at worst O(n)
 */


