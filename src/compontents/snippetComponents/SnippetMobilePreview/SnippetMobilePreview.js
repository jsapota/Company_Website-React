import React, {Component} from 'react';
import SnippetCodeIframe from '../SnippetCodeIframe/SnippetCodeIframe.js'
import './SnippetMobilePreview.css';

class SnippetMobilePreview extends Component {
  render() {
    return (
      <div className="snippet-mobile-preview">
        <div className="mobile-preview">
          <div className="snippet-live">
            <SnippetCodeIframe />
          </div>
        </div>
      </div>
    );
  };
}

export default SnippetMobilePreview;
