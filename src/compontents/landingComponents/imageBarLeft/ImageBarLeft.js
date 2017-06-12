import React, {Component} from 'react'
import './ImageBarLeft.css'

class ImageBarLeft extends Component {
  constructor(props) {
    super(props);
    this.handleHref = this.handleHref.bind(this);
  };
  handleHref= () => {
    window.location = "/snippets";
  };
  render() {
    return (
      <div className="image_bar--left image_bar" onClick={this.handleHref}>
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-md-6">
              <div className="col-sm-12">
                <h2 className="image_bar-title">Snippet Store</h2>
              </div>
              <div className="col-sm-12">
                <p className="image_bar-desc">If you already have a website,
                  don't waste time coding. Deliver a faster projekt with ready
                  snippets. Each and every single one update in real time from
                  a Google Spreadsheet</p>
              </div>
              <div className="col-sm-8">
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

export default ImageBarLeft;