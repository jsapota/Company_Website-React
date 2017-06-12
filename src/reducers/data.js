import 'lodash'
var _ = require('lodash');

const data = (state = [], action) => {
  switch(action.type) {
    case 'DATA_INIT':
      state = action.tableData;
      return state;
    case 'DATA_CHANGED':
      var data, keys, values, tableData = [];

      // Find all inputs
      data = document.querySelectorAll('input');

      // Get all values from inputs
      data = _.map(data, (x) => { return x.value; });

      // Split into array of arrays - every array have 5 elements
      data = _.chunk(data, 4);

      // Get keys from data and remove empty keys
      keys = _.compact(data[0]);

      // Get values from data
      values = data.slice(1, -1);

      // Iterate over rows
      for (var i=0; i<values.length; ++i) {
        // Add only rows with values
        if (!(values[i].every((r) => { return r === "" }))) {
          var row = _.zipObject(keys, values[i]);
          tableData.push(row);
        }
      }
      state = tableData;
      return state;
    default:
      return state;
  }
};

export default data