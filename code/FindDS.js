var { data } = require('./utils/DSA.js');
var console = require('console');
module.exports.function = function FindDS(name, type) {
  // var ds = null;
  var dsArray = [];
  let info = "";

  if (name) {
    if(name.toLowerCase() == "array" || name.toLowerCase() == "arrays") name = "array";
    else if(name.toLowerCase() == "linked list" || name.toLowerCase() == "linked lists") name = "Linked list";
    else if(name.toLowerCase() == "stack" || name.toLowerCase() == "stacks") name = "Stack";
    else if(name.toLowerCase() == "queue" || name.toLowerCase() == "queues" || name.toLowerCase() == 'q' || name.toLowerCase() == 'qs') name = "Queue";
    else if(name.toLowerCase() == "binary tree" || name.toLowerCase() == "binary trees") name = "Binary Tree";
    else if(name.toLowerCase() == "binary search tree" || name.toLowerCase() == "binary search trees") name = "Binary Search Tree";
    // else if(name.toLowerCase() == "hash table")
    
    data.forEach(ds => {
      if (ds.name.toLowerCase() == name.toLowerCase()) {
        dsArray.push(ds)
      }
    });
    console.log(dsArray);
    if (dsArray.length > 0) {
      console.log(dsArray);
      return dsArray;
    }
  }
  // type = type + " Data Structure";
  if (type) {
    data.forEach(ds => {
      if (ds.type.toLowerCase() == type.toLowerCase()) {
        dsArray.push(ds)
      }
    });
    console.log(dsArray);
    if (dsArray.length > 0) {
      console.log(dsArray);
      return dsArray;
    }
  }
  return data;
}
