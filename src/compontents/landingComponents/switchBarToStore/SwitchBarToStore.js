import React, {Component} from 'react'
import './SwitchBarToStore.css'

class SwitchBarToStore extends Component {
  constructor(props) {
    super(props);
    this.handleHref = this.handleHref.bind(this);
  };

  handleHref = () => {
    window.location = "/snippets";
  };

  render() {
    return (
      <div className="col-sm-6 switch_bar--store switch_bar" onClick={this.handleHref}>
        <div className="col-sm-12">
          <div className="col-sm-12">
            <p className="switch_bar-question">Already have a website?</p>
          </div>
          <div className="col-sm-12">
            <p className="switch_bar-try">Try our</p>
          </div>
          <div className="col-sm-12">
            <p className="switch_bar-target">Snippet store</p>
          </div>
        </div>
      </div>
    )
  }
}

export default SwitchBarToStore;