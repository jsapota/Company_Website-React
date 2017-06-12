import React, {Component} from 'react'
import './HeroImageHome.css'

class HeroImageHome extends Component {
  render() {
    return (
      <div className="container">
        <div className="row hero-image--home">
          <div className="col-sm-12 col-md-6">
            <div className="row">
              <div className="col-sm-12 home-header">
                <h1>Use Google Spreadsheets</h1>
                <h1>to build web & mobile</h1>
              </div>
            </div>
            <div className="row home-features">
              <div className="col-sm-12">
                <div className="col-sm-6 feature-title">
                  <p>Snippets</p>
                </div>
                <div className="col-sm-6 feature-desc">
                  <p>for website creators</p>
                </div>
              </div>
              <div className="col-sm-12">
                <div className="col-sm-6 feature-title">
                  <p>REST API</p>
                </div>
                <div className="col-sm-6 feature-desc">
                  <p>for developers</p>
                </div>
              </div>
              <div className="col-sm-12">
                <div className="col-sm-6 feature-title">
                  <p>Template converter</p>
                </div>
                <div className="col-sm-6 feature-desc">
                  <p>for everyone else</p>
                </div>
              </div>
            </div>
            <div className="row hero_sign_in_button">
              <div className="col-xs-8 col-xs-offset-2">
                <a className="btn btn-block btn-social btn-google sign_in-button">
                  <i className="fa fa-google icon--google"></i>
                  <p>Sign in with Google</p>
                </a>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 image-wrapper">
            <img className="hero-image" src="/images/tempLanding/clockImage.png" alt=""/>
          </div>
        </div>
      </div>
    )
  }
}

export default HeroImageHome;