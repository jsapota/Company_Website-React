import React, {Component} from 'react'
import './ImageBarCenter.css'

class ImageBarCenter extends Component {  constructor(props) {
  super(props);
  this.handleHref = this.handleHref.bind(this);
};
  handleHref= () => {
    window.location = "/converter";
  };
  render() {
    return (
      <section className="image_bar--center image_bar" onClick={this.handleHref}>
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-md-6 col-md-offset-3">
              <div className="col-sm-12">
                <h2 className="image_bar-title">Template Converter</h2>
              </div>
              <div className="col-sm-12">
                <p className="image_bar-desc">Create a website in 3 minutes! No developer skills
                needed while updating the content in real-time with a simple Google Spreadsheet.
                Don't waste time learning about tools. Focus on your business</p>
              </div>
              <div className="col-sm-8 col-sm-offset-2">
                <a className="btn btn-block btn-social btn-google sign_in-button">
                  <i className="fa fa-google icon--google"></i>
                  <p>Sign in with Google</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default ImageBarCenter;