import React, {Component} from 'react';
import HeroImageHome from '../../compontents/landingComponents/heroImageHome/HeroImageHome.js'
import Partners from '../../compontents/landingComponents/partners/Partners.js'
import Benefits from '../../compontents/landingComponents/benefits/Benefits.js'
import ImageBarRight from '../../compontents/landingComponents/imageBarRight/ImageBarRight'
import ImageBarCenter from '../../compontents/landingComponents/imageBarCenter/ImageBarCenter'
import ImageBarLeft from '../../compontents/landingComponents/imageBarLeft/ImageBarLeft'
import Testimonials from '../../compontents/landingComponents/testimonials/Testimonials'
import StartNowBar from '../../compontents/landingComponents/startNowBar/StartNowBar'

import './Home.css'

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      benefits: [
        {
          "name": "Hearts",
          "title": "It's free!",
          "desc": "We use Google Drive"
        },
        {
          "name": "Stopwatch",
          "title": "Save Time",
          "desc": "Full website in 3 minutes. Prototype faster."
        },
        {
          "name": "Beach",
          "title": "Code Less",
          "desc": "Read & write data with one line of code"
        },
        {
          "name": "Game_Controller",
          "title": "Take Control",
          "desc": "Do it yourself in minutes. Same data store for everyone."
        },
        {
          "name": "Google_Drive",
          "title": "Real time update",
          "desc": "Using Google Spreadsheets. Without setup."
        },
      ]
    }
  };
  render() {
    return (
      <div className="row">
        <HeroImageHome />
        <Partners />
        <Benefits benefits={this.state.benefits}/>
        <ImageBarRight />
        <ImageBarLeft />
        <ImageBarCenter />
        <Testimonials />
        <StartNowBar />
      </div>
    );
  };
}

export default Home;
