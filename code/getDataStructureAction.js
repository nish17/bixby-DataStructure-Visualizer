var data = require('./utils/dataStructure.js');
var console = require('console');
module.exports.function = function getDataStructureAction(dsName, type) {
  // var ds = null;
  var dsArray = [];
  let info = "";

  if (dsName) {

    data.forEach(ds => {
      if (ds.name.toLowerCase() == dsName.toLowerCase()) dsArray.push(ds)
    });

    if (dsArray.length > 0) {
      return dsArray;
    }
  }

  if (type) {
    data.forEach(ds => {
      if (ds.type.toLowerCase() == type.toLowerCase()) dsArray.push(ds)
    });

    if (dsArray.length > 0) {
      return dsArray;
    }
  }
  return data;
}
