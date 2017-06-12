import React, {Component} from 'react'
import './SwitchBarToConverter.css'

class switchBarToConverter extends Component {
  constructor(props) {
    super(props);
    this.handleHref = this.handleHref.bind(this);
  };
  handleHref= () => {
    window.location = "/converter";
  };
  render() {
    return (
      <div className="col-sm-6 switch_bar--converter switch_bar" onClick={this.handleHref}>
          <div className="col-sm-12">
            <p className="switch_bar-question">Want a full website?</p>
          </div>
          <div className="col-sm-12">
            <p className="switch_bar-try">Try our</p>
          </div>
          <div className="col-sm-12">
            <p className="switch_bar-target">Template converter</p>
          </div>
      </div>
    )
  }
}

export default switchBarToConverter;