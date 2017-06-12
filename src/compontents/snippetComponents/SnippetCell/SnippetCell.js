import React, { Component } from 'react'

class SnippetCell extends Component {
  render(){
    return (
      <td style={this.props.cellStyle}>
        <input
        onChange={() => {this.props.onCellChange();
        this.props.updateSnippet()}} defaultValue=""></input>
      </td>
    )
  }
}

export default SnippetCell;