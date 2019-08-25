var data = require('./utils/dataStructure.js');
var console = require('console');
module.exports.function = function getDataStructureAction (dsName) {
  let info = "";
   data.forEach(ds => {
     if(ds.name.toLowerCase() == dsName.toLowerCase()){ 
       info = JSON.stringify(ds);
       console.log(info);
       }
 });
 return info;
}
