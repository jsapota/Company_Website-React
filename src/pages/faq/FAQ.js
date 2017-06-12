import React, {Component} from 'react';
import FAQMainContainer from '../../compontents/landingComponents/FAQMainContainer/FAQMainContainer'

import './FAQ.css'

class FAQ extends Component {
  render() {
    return (
      <div className="row">
        <div className="container">
          <FAQMainContainer />
        </div>
      </div>
    );
  };
}

export default FAQ;
