

var HashTable = function() {
  this._limit = 8;
  this._count = 0;
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
      this._count++;
    }
  }
  if (exists === false) {
    this._storage.get(index).push([k, v]); 
    this._count++;
  }
  //if (this._count >= .75 * this._limit) <--- run resize
};

// HashTable.prototype.resize = function() {
//   if (this._count >= .75 * this._limit) {
//     var tempHash = new HashTable();
//     tempHash._limit *= this._limit;
//     this._storage.each(function(element) { 
//   if (Array.isArray(element)) {
//     for (var k = 0; k < element.length; k++) {
//       var key = element[k][0];
//       var val = element[k][1];
//       console.log(key, val);
          
//       var index2 = getIndexBelowMaxForKey(key, tempHash._limit);
//       console.log(index2);
//       }
//     }
//   });
// }



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
      this._count--;
    }
  }
};



/*
 * Complexity: insert: at best O(1) at worst O(n), retrieve: at best O(1) at worst O(n), remove: at best O(1) at worst O(n)
 */


