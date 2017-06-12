import React, {Component} from 'react'
import './DevelopersBar.css'
import Highlight from 'react-highlight'
class DevelopersBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonShell: "tab-button active-button",
      buttonRuby: "tab-button",
      buttonHTML: "tab-button",
      tableShell: "active-table",
      tableRuby: "hidden-table",
      tableHTML: "hidden-table"
    };
    this.showShell = this.showShell.bind(this);
    this.showRuby = this.showRuby.bind(this);
    this.showHTML = this.showHTML.bind(this);
  }
  showShell() {
    this.setState({
      buttonShell: "tab-button active-button",
      buttonRuby: "tab-button",
      buttonHTML: "tab-button",
      tableShell: "active-table",
      tableRuby: "hidden-table",
      tableHTML: "hidden-table"
    });
  }
  showRuby() {
    this.setState({
      buttonShell: "tab-button",
      buttonRuby: "tab-button active-button",
      buttonHTML: "tab-button",
      tableShell: "hidden-table",
      tableRuby: "active-table",
      tableHTML: "hidden-table"
    });
  }
  showHTML() {
    this.setState({
      buttonShell: "tab-button",
      buttonRuby: "tab-button",
      buttonHTML: "tab-button active-button",
      tableShell: "hidden-table",
      tableRuby: "hidden-table",
      tableHTML: "active-table"
    });
  }
  render() {
    return (
      <div className="DevelopersBar">
        <div className="container">
          <div className="row">
            <div className="developersHeader">
              <div className="col-sm-8 col-md-6 col-sm-offset-2 col-md-offset-3">
                <h1>Developers first</h1>
              </div>
              <div className="col-sm-8 col-md-6 col-sm-offset-2 col-md-offset-3">
                <p className="subtitle">Be up and running in seconds with our easy to use API.
                  company one-line implementation allows you to focus on
                  your product and build great features. No setup, no token
                  refreshing, no more quirky docs. Just get access to Google
                  Spreadsheets from your code.</p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-sm-12 col-md-8">
              <div className={this.state.buttonShell} onClick={this.showShell}>Shell</div>
              <div className={this.state.buttonRuby} onClick={this.showRuby}>Ruby</div>
              <div className={this.state.buttonHTML} onClick={this.showHTML}>HTML Snippet</div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12 col-md-8">
              <div className={this.state.tableShell}>
                <Highlight className='Bash'>{`#Read whole spreadsheet
curl "https://company.com/apis/v1.0/020b2c0f"

# Get all rows where column 'score' is '42'
# and column 'name' is 'Peter'
curl "https://company.com/apis/v1.0/020b2c0f/search?score=42&name=Peter"
`}
</Highlight>
              </div>
              <div className={this.state.tableRuby}>
                <Highlight className='ruby'>{
`require 'company'
company = company::Client.new("020b2c0f")

# Get all rows where column 'score' is '42'
# and column 'name' is 'Peter'
company.read(search: { score: 42, name: "Peter" })
`}
</Highlight>
              </div>
              <div className={this.state.tableHTML}>
                <Highlight className="html"> {
`
<!-- Read whole spreadsheet -->
<div sheetsu="https://sheetsu.com/apis/v1.0/020b2c0f">
  <p>Name: {{name}}</p>
  <p>Score: {{score}}</p>
</div>

<script src="//load.sheetsu.com?i=1337"></script>
`}
</Highlight>
              </div>
            </div>
            <div className="col-sm-12 col-md-4">
              <p className="title">Read</p>
              <p className="desc">Read data from Google Spreadsheets.
                Show data on a website or in a mobile app. Build CMS
                or use spreadsheets as a database. </p>
              <a href="#">Full API reference →</a>
            </div>
          </div>

            <div className="row secondTab">
              <div className="col-sm-12 col-md-8">
                <div className={this.state.tableShell}>
                  <Highlight className='bash'>{
`# Adds row to spreadsheet
curl "https://company.com/apis/v1.0/020b2c0f"
-X POST
-H "Content-Type: application/json"
-d '{ "id": "6", "name": "Glenn", "score": "69" }'
`}
                  </Highlight>
                </div>
                <div className={this.state.tableRuby}>
                  <Highlight className='ruby'>{
`require 'company'
company = company::Client.new("020b2c0f")

# Adds single row to spreadsheet
company.create({ id: 7, name: "Glenn", score: "69" })
`}
                  </Highlight>
                </div>
                <div className={this.state.tableHTML}>
                  <Highlight className='html'>{
`<!--Display form, which will save record to the Google Spreadsheet-->
<form company="https://company.com/apis/v1.0/1c3c0ff33">
  <input type="text" name="full_name">
  <input type="text" name="email">
  <textarea name="message"></textarea>
  <input type="submit">
</form>

<script src="//load.company.com?i=1337"></script>
`}
                  </Highlight>
                </div>
              </div>
              <div className="col-sm-12 col-md-4">
                <p className="title">Create</p>
                <p className="desc">Add rows to Google Spreadsheets.
                  Combine the power of spreadsheets directly with your
                  tools and products. Create forms and dashboards.</p>
                <a href="#">Full API reference →</a>
              </div>
          </div>
      </div>
    </div>
    );
  }
}
export default DevelopersBar;