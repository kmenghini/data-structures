

// Instantiate a new graph
var Graph = function() {
  this.storage = [];
  //this.value = value;
  //this.edges = [];
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  var newNode = {};
  newNode[node] = [];
  console.log(this.storage)
  this.storage.push(newNode);
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  //loop through storage
    //if storage[i][node] exists, return true;
  for (var i = 0; i < this.storage.length; i++) {
    if (this.storage[i][node]) {
      return true;
    }
  }
  return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  for (var i = 0; i < this.storage.length; i++) {
    if (this.storage[i][node]) {
      this.storage.splice(i, 1);
    }
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
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
  //find fromNode
    //look at node value array
      //if array contains toNode, return true
      //else return false
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  var fromIndex, toIndex;
  for (var i = 0; i < this.storage.length; i++) {
    if (this.storage[i][fromNode]) {
      fromIndex = i;
    } else if (this.storage[i][toNode]) {
      toIndex = i;
    }
  }
  this.storage[fromIndex][fromNode].push(toIndex);
  this.storage[toIndex][toNode].push(fromIndex);
};

// Remove an edge between any two specified (by value) nodes.
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

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (var i = 0; i < this.storage.length; i++) {
    cb(this.storage[i])
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


