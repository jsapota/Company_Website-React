import React, {Component} from 'react'
import './SwitchBarToREST.css'

class SwitchBarToREST extends Component {
  constructor(props) {
    super(props);
    this.handleHref = this.handleHref.bind(this);
  };
  handleHref= () => {
    window.location = "/rest";
  };
  render() {
    return (
      <div className="col-sm-6  switch_bar--rest switch_bar" onClick={this.handleHref}>
        <div className=" col-sm-12">
            <div className="col-sm-12">
              <p className="switch_bar-question">Are you a developer?</p>
            </div>
            <div className="col-sm-12">
              <p className="switch_bar-try">Try our</p>
            </div>
            <div className="col-sm-12">
              <p className="switch_bar-target">REST API</p>
          </div>
        </div>
      </div>
    )
  }
}

export default SwitchBarToREST;