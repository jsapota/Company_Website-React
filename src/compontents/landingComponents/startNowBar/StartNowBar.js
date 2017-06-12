import React, {Component} from 'react'
import './StartNowBar.css'

class StartNowBar extends Component {
  render() {
    return (
      <div className="start_now-bar">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-6 col-md-offset-3">
              <h1 className="start_now-title">Start Company for <span className="start_now-free"> Free </span> now!</h1>
              <p className="start_now-Text--middle">1-minute signup No credit card required</p>
              <div className="col-sm-8 col-sm-offset-2">
                <a className="btn btn-block btn-social btn-google sign_in-button">
                  <i className="fa fa-google icon--google"/>
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

export default StartNowBar;