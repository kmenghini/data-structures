

var HashTable = function() {
  this._limit = 8;
  this._count = 0;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var storingFunction = function(k, v, index) {
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
      this._count++;
    }
  };
  if (this._count >= .75 * this._limit) {
    var tempHash = new HashTable();
    tempHash._limit = tempHash._limit * 2;
    //console.log(tempHash)
    for (var j = 0; j < this._limit; j++) {
      if (Array.isArray(this._storage.get(j))) {
        for (var k = 0; k < this._storage.get(j).length; k++) {
          var key = this._storage.get(j)[k][0];
          var val = this._storage.get(j)[k][1];

          var index2 = getIndexBelowMaxForKey(key, tempHash._limit);

          //console.log(index2)
          var firstPass;
          // if (firstPass) {
          //   debugger;
          // }
          storingFunction.call(tempHash, key, val, index2);
          firstPass = true;
          //console.log(k);
        }
      }
    }
  //reassign storage to tempArr
    //this._limit = tempHash._limit;
    // console.log(this)
    //this._limit = tempHash._limit;
    this._storage = tempHash._storage;
    //console.log(tempHash._storage);
    tempHash._storage.each(function(element) {
      console.log(element, tempHash);
      // element.forEach(function(tuple){
      //   console.log(tuple);
      // });
      
    });
    
  }

  // if (this._count >= .75 * this._limit) {   //<-------------------
  //   this._limit *= 2;
  //   var tempArr = LimitedArray(this._limit);
  //     //console.log(this._storage);   
  //   this._storage.each(function(tuples) {
  //     console.log(this._storage)
  //     tuples.forEach(function(tuple) {
  //       var i = getIndexBelowMaxForKey(tuple[0], this._limit);
  //       storingFunction.call(this, tuple[0], tuple[1], i);
  //     });
  //   });

    
  // } //<----------------------------------------------------------------

  var index = getIndexBelowMaxForKey(k, this._limit);
  storingFunction.call(this, k, v, index);

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
      this._count--;
    }
  }
};



/*
 * Complexity: insert: at best O(1) at worst O(n), retrieve: at best O(1) at worst O(n), remove: at best O(1) at worst O(n)
 */


