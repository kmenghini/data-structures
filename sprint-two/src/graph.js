var Graph = function() {
  this.storage = [];
};

Graph.prototype.addNode = function(node) {
  var newNode = {};
  newNode[node] = [];
  this.storage.push(newNode);
};

Graph.prototype.contains = function(node) {
  for (var i = 0; i < this.storage.length; i++) {
    if (this.storage[i][node]) {
      return true;
    }
  }
  return false;
};

Graph.prototype.removeNode = function(node) {
  for (var i = 0; i < this.storage.length; i++) {
    if (this.storage[i][node]) {
      this.storage.splice(i, 1);
    }
  }
};

Graph.prototype.hasEdge = function(fromNode, toNode) {
  var index;
  for (var k = 0; k < this.storage.length; k++) {
    if (this.storage[k][toNode]) {
      index = k;
    }
  }
  for (var i = 0; i < this.storage.length; i++) {
    if (this.storage[i][fromNode]) {
      for (var j = 0; j < this.storage[i][fromNode].length; j++) {
        if (this.storage[i][fromNode][j] === index) {
          return true;
        }
      }
    }
  }
  return false;
};

Graph.prototype.addEdge = function(fromNode, toNode) {
  var fromIndex, toIndex;
  for (var i = 0; i < this.storage.length; i++) {
    if (this.storage[i][fromNode]) {
      fromIndex = i;
    } 
    if (this.storage[i][toNode]) {
      toIndex = i;
    }
  }
  this.storage[fromIndex][fromNode].push(toIndex);
  this.storage[toIndex][toNode].push(fromIndex);
};

Graph.prototype.removeEdge = function(fromNode, toNode) {
  var fromIndex, toIndex, fromEdgeIndex, toEdgeIndex;
  for (var i = 0; i < this.storage.length; i++) {
    if (this.storage[i][fromNode]) {
      fromIndex = i;
    } else if (this.storage[i][toNode]) {
      toIndex = i;
    }
  }
  for (var j = 0; j < this.storage[fromIndex].length; j++) {
    if (this.storage[fromIndex][j] === toNode) {
      fromEdgeIndex = j;
    }
  }
  for (var k = 0; k < this.storage[toIndex].length; k++) {
    if (this.storage[toIndex][j] === fromNode) {
      toEdgeIndex = j;
    }
  }
  this.storage[fromIndex][fromNode].splice(toEdgeIndex, 1);
  this.storage[toIndex][toNode].splice(fromEdgeIndex, 1);
};

Graph.prototype.forEachNode = function(cb) {
  var val;
  for (var i = 0; i < this.storage.length; i++) {
    val = Object.keys(this.storage[i])[0];
    cb(val);
  }
};

//addNode: O(1); contains: O(n); removeNode: O(n); hasEdge: 0(n^2); addEdge: o(n); remove edge: O(n); forEachNode: O(n)
