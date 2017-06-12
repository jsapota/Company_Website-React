import React, {Component} from 'react';
import HeroImageRest from '../../compontents/landingComponents/heroImageREST/HeroImageREST'
import Partners from '../../compontents/landingComponents/partners/Partners.js'
import DevelopersBar from '../../compontents/landingComponents/developersBar/DevelopersBar.js'
import SwitchBarToConverter from '../../compontents/landingComponents/switchBarToConverter/SwitchBarToConverter'
import SwitchBarToStore from '../../compontents/landingComponents/switchBarToStore/SwitchBarToStore'
import Testimonials from '../../compontents/landingComponents/testimonials/Testimonials'
import Pricing from '../../compontents/landingComponents/pricing/Pricing'
import Benefits from "../../compontents/landingComponents/benefits/Benefits";
import StartNowBar from "../../compontents/landingComponents/startNowBar/StartNowBar";

import './REST.css'


class REST extends Component {
  constructor(props) {
    super(props);
    this.state = {
      plans: [
        {
          "mainColor": "#3DA83D",
          "title": "Company",
          "subtitle": "1 Light Spreadsheet",
          "features": ["CACHING", "1 API link created", "1 worksheet", "< 200 requests / month"],
          "price": "0",
          "subpriceText": "",
          "subpriceTextSecond": "",
        },
        {
          "mainColor": "#D23131",
          "title": "Company Premium",
          "subtitle": "1 Full Spreadsheet",
          "features": ["CACHING", "1 API link created", "UNLIMITED worksheet", "UNLIMITED requests / month"],
          "price": "9",
          "subpriceText": "Per Month",
          "subpriceTextSecond": "Per Spreadsheet",
        },
      ],
      benefits: [
        {
          "name": "Stopwatch",
          "title": "Fast Delivery",
          "desc": "Read and write data with one line of code."
        },
        {
          "name": "Google_Drive",
          "title": "Easy Access",
          "desc": "Make data accessible from a Google Spreadsheet"
        },
        {
          "name": "Medal",
          "title": "Caching",
          "desc": "Faster & better than Google API"
        },
        {
          "name": "Game_Controller",
          "title": "Take Control",
          "desc": "Use Google Spreadsheets as CMS or to capture forms"
        },
        {
          "name": "Available_Updates",
          "title": "Real update update",
          "desc": "Same data store for everyone. Without setup."
        },
      ]
    }
  };

  render() {
    return (
      <div className="row">
        <HeroImageRest />
        <Partners />
        <DevelopersBar />
        <Benefits benefits={this.state.benefits}/>
        <Testimonials />
        <Pricing plans={this.state.plans}/>
        <div className="row">
          <SwitchBarToStore />
          <SwitchBarToConverter />
        </div>
        <StartNowBar />
      </div>
    );
  };
}

export default REST;
