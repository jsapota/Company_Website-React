import React, {Component} from 'react';
import SnippetCodeIframe from '../SnippetCodeIframe/SnippetCodeIframe.js';
import SnippetCurrentCodeSource from '../../snippetContainers/SnippetCurrentCodeSource/SnippetCurrentCodeSource.js';
import './SnippetPreview.css';
/*
 props for this component
 htmlTemplate - name of snippetDemos html file - file located in public folder

 */
class SnippetPreview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonWWW: "tab-button active-button",
      buttonHTML: "tab-button",
      tableWWW: "active-table",
      tableHTML: "hidden-table"
    };
    this.showWWWPane = this.showWWWPane.bind(this);
    this.showHTMLPane = this.showHTMLPane.bind(this);
  }
  showWWWPane(){
    this.setState({
      buttonWWW: "tab-button active-button",
      buttonHTML: "tab-button",
      tableWWW: "active-table",
      tableHTML: "hidden-table"
    });
  }
  showHTMLPane(){
    this.setState({
      buttonWWW: "tab-button",
      buttonHTML: "tab-button active-button",
      tableWWW: "hidden-table",
      tableHTML: "active-table"
    });
  }
  render() {
    return (
      <div className="snippet-preview" id="section-snippet-customizer">
        <div className="row">
          <div className={this.state.buttonHTML} onClick={this.showHTMLPane}>HTML</div>
          <div className={this.state.buttonWWW} onClick={this.showWWWPane}>WWW</div>
          <div className={this.state.tableWWW}><SnippetCodeIframe /></div>
          <div className={this.state.tableHTML}><SnippetCurrentCodeSource htmlTemplate={this.props.htmlTemplate}/></div>
        </div>
      </div>
    );
  }
}

export default SnippetPreview;

