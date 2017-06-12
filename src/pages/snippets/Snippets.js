import React, {Component} from 'react';
import SwitchBarToREST from '../../compontents/landingComponents/switchBarToREST/SwitchBarToREST'
import SwitchBarToConverter from '../../compontents/landingComponents/switchBarToConverter/SwitchBarToConverter'
import HeroImageStore from '../../compontents/landingComponents/heroImageStore/HeroImageStore'
import Partners from '../../compontents/landingComponents/partners/Partners.js'
import Testimonials from '../../compontents/landingComponents/testimonials/Testimonials'
import Pricing from '../../compontents/landingComponents/pricing/Pricing'
import Benefits from "../../compontents/landingComponents/benefits/Benefits";
import StartNowBar from "../../compontents/landingComponents/startNowBar/StartNowBar";

import './Snippets.css'


class Snippets extends Component {
  constructor(props) {
    super(props);
    this.state = {
      plans: [
        {
          "mainColor": "#3DA83D",
          "title": "Company",
          "subtitle": "1 Light Spreadsheet",
          "features": ["REAL-TIME update", "1 snippet", "limited data", "< 200 visitors / month"],
          "price": "0",
          "subpriceText": "",
        },
        {
          "mainColor": "#D23131",
          "title": "Company Premium",
          "subtitle": "1 Full Spreadsheet",
          "features": ["REAL-TIME update", "1 Snippet", "UNLIMITED data", "UNLIMITED visitors / month"],
          "price": "9",
          "subpriceText": "Per Month",
          "subpriceTextSecond": "Per Spreadsheet",
        },
      ],
      benefits: [
        {
          "name": "Stopwatch",
          "title": "Fast Delivery",
          "desc": "Build products, not code."
        },
        {
          "name": "Google_Drive",
          "title": "Easy Access",
          "desc": "Manage data from a Google Spreadsheet."
        },
        {
          "name": "Bug",
          "title": "No Bugs",
          "desc": "Fully tested code to add anywhere."
        },
        {
          "name": "Change_Theme",
          "title": "Caching",
          "desc": "Faster & better than Google API."
        },
        {
          "name": "Available_Updates",
          "title": "Customize Live!",
          "desc": "Update colors, size & metrics in 1 minute."
        },
      ]
    }
  };

  render() {
    return (
      <div className="row">
        <HeroImageStore />
        <Partners />
        <div className="store">
          store
        </div>
        <Benefits benefits={this.state.benefits}/>
        <Testimonials />
        <Pricing plans={this.state.plans}/>
        <div className="row">
          <SwitchBarToREST />
          <SwitchBarToConverter />
        </div>
        <StartNowBar />
      </div>
    );
  };
}

export default Snippets;
