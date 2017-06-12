import React, {Component} from 'react';
import SnippetReferral from '../SnippetReferral/SnippetReferral.js'
import './SnippetReferrals.css';

class SnippetReferrals extends Component {
  /*
   props for this component

   referrals - array of referrals info build like this
   {
     {name, title, subtitle, description}
   }
   name - name of the component - mainly to get images
   title - show title
   subtitle - show subtitle
   description - description

   Put an png and gif files with `this.props.name` name to the ./public/images/snippets
   */

  render() {
    return (
      <section className="snippet-referrals">
        <div className="container">
          <div className="row">
              <div className="referrals-side">
                <div className="referral-style">
                  {this.props.referrals.map(function (referrals, i) {
                    return <SnippetReferral key={'referral-key'+ i}
                                            name={referrals.name}
                                            description={referrals.description}
                                            author={referrals.author}/>
                  })}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
}

export default SnippetReferrals;
