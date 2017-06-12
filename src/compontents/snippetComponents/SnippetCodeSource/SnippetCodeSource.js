import React, { Component } from 'react';
import './SnippetCodeSource.css'

class SnippetCodeSource extends Component {
  constructor(props) {
    super(props);
    this.state = { value: props.initialHtml };
  }
  render(){
    return (
      <div className="snippet-code-source-textarea">
        <textarea id="textareaID" defaultValue={this.state.value} onChange={(e) => {
          this.props.onSourceChange(e.target.value);
          this.props.getTable();
          this.props.updateSnippet();
        }}/>
      </div>
    )
  };
  componentDidMount(){
    this.props.onSourceChange(this.state.value);
    this.props.updateSnippet();
  }
}

export default SnippetCodeSource