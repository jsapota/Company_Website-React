import React, {Component} from 'react';
import SnippetRows from '../SnippetRows/SnippetRows'
import './SnippetSpreadsheet.css';

class SnippetSpreadsheet extends Component {
  render() {
    return (
      <section className="snippet-customizer" id="section-snippet-customizer">
                <div className="row">
                  <img className="try-arrow" src="/images/snippetImages/arrow.png" alt="arrow" />
                  <p className="try-it"><em>Hey, it's an interactive demo. Try it! Change content to see real time update in previews.</em></p>
                </div>
                <div className="tableCont">
                  <div className="widget-table">
                    <table>
                      <thead>
                      <tr>
                        <td className="dont-copy" data-pseudo-content=" "></td>
                        <td className="dont-copy" style={this.props.cellStyle[0]} data-pseudo-content="A"></td>
                        <td className="dont-copy" style={this.props.cellStyle[1]} data-pseudo-content="B"></td>
                        <td className="dont-copy" style={this.props.cellStyle[2]} data-pseudo-content="C"></td>
                        <td className="dont-copy" style={this.props.cellStyle[3]} data-pseudo-content="D"></td>
                      </tr>
                      </thead>

                      <SnippetRows numberOfRows={8} cellStyle={this.props.cellStyle} updateSnippet={this.props.updateSnippet}
                                   tableData={this.props.initialTableData} onCellChange={this.props.onCellChange}/>
                    </table>
                  </div>
                </div>
      </section>

    );
  }
  componentDidMount(){
    this.props.updateSnippet();
    this.props.onCellChange();
  }
}


export default SnippetSpreadsheet
