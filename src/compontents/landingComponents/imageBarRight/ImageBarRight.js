import React, {Component} from 'react'
import './ImageBarRight.css'

class ImageBarRight extends Component {
  constructor(props) {
    super(props);
    this.handleHref = this.handleHref.bind(this);
  };
  handleHref= () => {
    window.location = "/rest";
  };
  render() {
    return (
      <div className="image_bar--right image_bar" onClick={this.handleHref}>
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-md-6 col-md-offset-6">
              <div className="col-sm-12">
                <h2 className="image_bar-title">REST API</h2>
              </div>
              <div className="col-sm-12">
                <p className="image_bar-desc">Be up and running in seconds with our easy to use API.
                  company one-line implementation allows you to focus on your
                  product and build great features. No setup, no token refreshing,
                  no more quirky docs. Just get access to Google Spreadsheet from
                  your code</p>
              </div>
              <div className="col-sm-8  col-sm-offset-4">
                <a className="btn btn-block btn-social btn-google sign_in-button">
                  <i className="fa fa-google icon--google"></i>
                  <p>Sign in with Google</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ImageBarRight;