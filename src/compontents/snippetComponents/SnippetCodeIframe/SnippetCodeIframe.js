import React, {Component} from 'react';
import './SnippetCodeIframe.css'

class SnippetCodeIframe extends Component {
  render() {
    return (
      <div className="snippet-code-iframe">
        <iframe className="codeIframe" ></iframe>
      </div>
    );
  };
}

export default SnippetCodeIframe;
