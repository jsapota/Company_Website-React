import React, {Component} from 'react'
import './HeroImageStore.css'

class heroImageStore extends Component {
  render() {
    return (
      <div className="hero-image--store">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-6 col-md-offset-3">
              <div className="col-sm-12 hero-image-title--first">
                <p>Snippets</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12 hero-image-title--second">
              <p>The <b>fastest</b> way to build web and mobile.</p>
            </div>

          </div>
          <div className="row">
            <div className="col-sm-12 hero-imago-title--thrid">
              <p>Use already prepared components. Works everywhere. </p>
              <p>Gets updated in real-time from Google Spreadsheet</p>
            </div>
          </div>
          <div className="row sign_in-bar">
            <div className="col-xs-8 col-xs-offset-2 col-sm-4 col-sm-offset-4">
              <p> Try now! It's free! </p>
              <a className="btn btn-block btn-social btn-google sign_in-button">
                <i className="fa fa-google icon--google"></i>
                <p>Sign in with Google</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default heroImageStore;