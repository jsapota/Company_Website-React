import React, {Component} from 'react';
import SnippetRow from '../SnippetRow/SnippetRow'
import 'lodash'
var _ = require('lodash');

class SnippetRows extends Component {
  constructor(props){
    super(props);
    this.setTableData = this.setTableData.bind(this);
    this.getTableData = this.getTableData.bind(this);
  };
  setTableData(inputData){
    var data;

    // Find all inputs
    data = document.querySelectorAll('input');
    // Split into array of arrays - every array have 4 elements
    data = _.chunk(data, 4);
    if(data.length > 0){
      for (var i = 0; i < inputData.length; i++){
        for (var j = 0; j < 4; j++){
          if(inputData[i][j] === undefined)
            data[i][j].value = "";
          else
            data[i][j].value = inputData[i][j];
        }
      }
    }

  }
  getTableData(){
    var data, keys, values, result = [];

    // Find all inputs
    data = document.querySelectorAll('input');

    // Get all values from inputs
    data = _.map(data, (x) => { return x.value; });

    // Split into array of arrays - every array have 5 elements
    data = _.chunk(data, 5);

    // Get keys from data and remove empty keys
    keys = _.compact(data[0]);

    // Get values from data
    values = data.slice(1, -1);

    // Iterate over rows
    for (var i=0; i<values.length; ++i) {
      // Add only rows with values
      if (!(values[i].every((r) => { return r === "" }))) {
        var row = _.zipObject(keys, values[i]);
        result.push(row);
      }
    }
    return result;
  };
  render() {
    var indents = [];
    for (var i = 1; i <= this.props.numberOfRows; i++) {
      indents.push(<SnippetRow key={"id" + i} rowNumber={i}
                               cellStyle={this.props.cellStyle}
                               updateSnippet={this.props.updateSnippet}
                               onCellChange={this.props.onCellChange} />);
    }
    return (
      <tbody>
        {indents}
      </tbody>
    )
  }
  componentDidMount(){
    this.setTableData(this.props.tableData);
    this.props.updateSnippet();
    this.props.onCellChange();
  }
}


export default SnippetRows;