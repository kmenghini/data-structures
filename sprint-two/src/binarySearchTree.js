var BinarySearchTree = function(value) {
  var obj = Object.create(BinarySearchTree.prototype);
  obj.value = value;
  obj.left = null;
  obj.right = null;
  return obj;
};


BinarySearchTree.prototype.insert = function(value) {
  var insertVal = BinarySearchTree(value);
  if (insertVal.value > this.value) {
    if (this.right === null) {
      this.right = insertVal;
    } else {
      return this.right.insert(value);
    }
  } else if (insertVal.value < this.value) {
    if (this.left === null) {
      this.left = insertVal;
    } else {
      return this.left.insert(value);
    }
  }
};

BinarySearchTree.prototype.contains = function(searchValue) {
  if (searchValue === this.value) {
    return true;
  } else if (searchValue > this.value) {
    if (this.right === null) {
      return false;
    } else {
      return this.right.contains(searchValue);
    }
  } else if (searchValue < this.value) {
    if (this.left === null) {
      return false;
    } else {
      return this.left.contains(searchValue);
    }
  }

};

BinarySearchTree.prototype.depthFirstLog = function(cb) {
  cb(this.value);
  if (this.left) {
    this.left.depthFirstLog(cb);
  }
  if (this.right) {
    this.right.depthFirstLog(cb);
  }
};
/*
 * Complexity: insert: O(log(n)); contains: O(log(n)); depthFirstLog: O(n)

 */
