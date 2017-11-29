var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var key = 0;
  var start = 0;
  // Implement the methods below

  someInstance.enqueue = function(value) {
  //save value in storage with key
    storage[key] = value;
  //increment key
    key++;
  };

  someInstance.dequeue = function() {
  //save stored value to variable

    var returnValue = storage[start];
  //delete key value pair
    delete storage[start];
  //decrement key
    start++;
    return returnValue;
  };

  someInstance.size = function() {
  //return key
    return Math.max(key - start, 0); 
  };

  return someInstance;
};
