var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var key = 0;

  // Implement the methods below
  someInstance.push = function(value) {
  //save value in storage
    storage[key] = value;
  //increment key
    key++;
  };

  someInstance.pop = function() {
  //decrement key
    key--;
  //save value as variable
    var storageValue = storage[key];
  //delete value
    delete storage[key];
  //return variable
    return storageValue;
  };

  someInstance.size = function() {
  //return key size
    return Math.max(key, 0);
  };

  return someInstance;
};
