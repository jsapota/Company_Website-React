import React, { Component } from 'react';
import SnippetCell from '../SnippetCell/SnippetCell'

class SnippetRow extends Component {
  render() {
    var indents = [];
    // for (var i = 1; i <= 4; i++) {
    indents.push(<SnippetCell key={"id" + 1} cellStyle={this.props.cellStyle[0]} updateSnippet={this.props.updateSnippet} onCellChange={this.props.onCellChange}/>);
    indents.push(<SnippetCell key={"id" + 2} cellStyle={this.props.cellStyle[1]} updateSnippet={this.props.updateSnippet} onCellChange={this.props.onCellChange}/>);
    indents.push(<SnippetCell key={"id" + 3} cellStyle={this.props.cellStyle[2]} updateSnippet={this.props.updateSnippet} onCellChange={this.props.onCellChange}/>);
    indents.push(<SnippetCell key={"id" + 4} cellStyle={this.props.cellStyle[3]} updateSnippet={this.props.updateSnippet} onCellChange={this.props.onCellChange}/>);
    // }
    return (
      <tr>
        <td className="num dont-copy" data-pseudo-content={this.props.rowNumber}></td>
        {indents}
      </tr>
    )
  }
}

export default SnippetRow