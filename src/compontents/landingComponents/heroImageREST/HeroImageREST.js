import React, {Component} from 'react'
import './HeroImageREST.css'

class heroImageREST extends Component {
  render() {
    return (
      <div className="hero-image--REST">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="col-sm-12 hero-image-title--first">
                <p>Turn a Google Spreadsheet into a REST API</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12 hero-image-title--second">
              <p>Code less. Use it as a data store. Without setup.</p>
            </div>

          </div>
          <div className="row">
            <div className="col-sm-12 hero-image-input_bar">
              <div className="col-sm-8 col-sm-offset-2">
                <div className="col-sm-12 col-md-9 padding--remove">
                  <input className="input--height" type="text" placeholder=" Google Spreadsheet URL"/>
                </div>
                <div className="col-sm-12 col-md-3 padding--remove">
                  <div className="input--height input-submit" href="#"><p>CREATE API</p></div>
                </div>
                <div className="col-sm-12 padding--remove">
                  <a className="input-text--under">No Speadsheet? Generate a test one HERE</a>
                </div>
              </div>
            </div>
          </div>
          <div className="row sign_in-bar">

          </div>
        </div>
      </div>
    )
  }
}

export default heroImageREST;