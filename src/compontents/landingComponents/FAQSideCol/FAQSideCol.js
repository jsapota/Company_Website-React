import React, {Component} from 'react'
import './FAQSideCol.css'

class FAQSideCol extends Component {
  render() {
    return (
      <div className="FAQSideCol row">
        <div className="col-sm-11 col-sm-offset-1">
          <p className="sideHeader">Powered by Comapny</p>
        </div>
        <div className="col-sm-11 col-sm-offset-1">
          <img className="logoSheet" src="/images/tempLanding/logoSheet.png" alt=""></img>
        </div>
        <div className="col-sm-11 col-sm-offset-1">
          <p className="sideDesc">
            Company is the solution to those who want to code less while not losing
            quality in the end result. It's the fastest way to build a website!
            REST API links for developers, Snippet Store for website creators and
            Template Converter for everyone else.
          </p>
        </div>
        <div className="col-sm-11 col-sm-offset-1">
          <p className="tryNow">Try Now! It's Free</p>
        </div>
        <div className="col-sm-11 col-sm-offset-1 verticalSeparator">
          <a className="btn btn-block btn-social btn-google sign_in-button">
            <i className="fa fa-google icon--google"></i>
            <p>Sign in with Google</p>
          </a>
        </div>
        <div className="col-sm-11 col-sm-offset-1">
          <p className="subscribeHeader">Get the best insights from the Company team</p>
        </div>
        <div className="col-sm-11 col-sm-offset-1">
          <p className="sideDesc">Subscribe and be the first to know about our blog posts!</p>
        </div>
        <div className="col-sm-11 col-sm-offset-1 verticalSeparator">
          <div className="row subscribeBar">
            <div className="col-sm-8">
              <input className="subscribeInput" type="email" placeholder="Your email"/>
            </div>
            <div className="col-sm-4 subscribeButton">
              <a className="" href="#"><p>Subscribe</p></a>
            </div>
          </div>
        </div>
        <div className="col-sm-11 col-sm-offset-1">
          <div className="row">
            <div className="col-sm-12">
              <p className="talkingHeader">What we are talking about</p>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6">
              <p className="subject">REST API</p>
            </div>
            <div className="col-sm-6">
              <p className="answer">2 POSTS</p>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6">
              <p className="subject">Snippets</p>
            </div>
            <div className="col-sm-6">
              <p className="answer">3 POSTS</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default FAQSideCol;