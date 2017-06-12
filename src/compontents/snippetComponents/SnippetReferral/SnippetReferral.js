import React, {Component} from 'react';
import './SnippetReferral.css';

class SnippetReferral extends Component {
  /*
   props for this component

   name - name of the component - mainly to get images
   title - show title
   subtitle - show subtitle
   description - description

   Put an png and gif files with `this.props.name` name to the ./public/images/snippets
   */
  imagePath = (imageName) => {
    return "/images/snippetImages/" + imageName + ".jpg";
  }

  render() {
    return (
        <div className="row referral-data">
          <div className="col-xs-12 col-sm-4 col-md-2">
            <div className="referral-image">
              <img src={this.imagePath(this.props.name)} alt="referral"/>
            </div>
          </div>
          <div className="col-xs-12 col-sm-8 col-md-10">
            <div className="referral-opinion">
              <p>{this.props.description}</p>
                <p>{this.props.author}</p>
            </div>
          </div>
        </div>
    );
  };
}

export default SnippetReferral;
