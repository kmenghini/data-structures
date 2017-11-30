var Stack = function() {
  this.key = 0;
  this.storage = {};
};


Stack.prototype.pop = function() {
  this.key--;
  var item = this.storage[this.key];
  delete this.storage[this.key];
  return item;
};
Stack.prototype.push = function(value) { 
  this.storage[this.key] = value;
  this.key++;
};
Stack.prototype.size = function() {
  return Math.max(0, this.key);
};


// Stack.prototype = {
//   pop: function() {
//     this.key--;
//     var item = this.storage[this.key];
//     delete this.storage[this.key];
//     return item;
//   },
//   push: function(value) { 
//     this.storage[this.key] = value;
//     this.key++;
//   },
//   size: function() {
//     return Math.max(0, this.key);
//   }
// };