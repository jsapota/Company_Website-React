import React, {Component} from 'react';
import './SnippetBenefit.css';

class SnippetBenefit extends Component {
  imagePath = (imageName) => {
    return "/images/snippetImages/" + imageName + ".png";
  };
  render() {
    return (
      <div className="col-md-4 col-sm-6">
        <div className="snippet-benefit">
            <img className="benefit-image" src={this.imagePath(this.props.name)} alt="foo"/>
            <h1 className="benefit-title">{this.props.title}</h1>
            <p className="benefit-description">{this.props.description}</p>
        </div>
      </div>
    );
  };
}

export default SnippetBenefit;
