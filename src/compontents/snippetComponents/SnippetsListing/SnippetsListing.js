import React, {Component} from 'react';
import SnippetSmallBox from '../SnippetSmallBox/SnippetSmallBox.js'
import './SnippetsListing.css';

class SnippetsListing extends Component {
  render() {
    return (
      <div className="snippet-listing">
        <div className="container">
          <div className="row">
            
            <div className="col-sm-6">
              <SnippetSmallBox name="pizza" title="Restaurant Menu" description="Basic spreadsheet-driven template for a menu of a restuarant." url="restaurant-menu"/>
            </div>

            <div className="col-sm-6">
              <SnippetSmallBox name="contact_form" title="Contact form" description="opis contact form"/>
            </div>

          </div>
        </div>
      </div>
    );
  };
}

export default SnippetsListing;
