import React, {Component} from 'react';

import './Testimonial.css'

class Testimonial extends Component {
  imagePath = (imageName) => {
    return "/images/tempLanding/" + imageName + ".png";
  };
  render() {
    return (
          <div className="col-sm-12 col-md-6 testimonial">
            <div className="col-sm-12">
              <div className="col-xs-6 col-sm-4">
                <img className="testimonial-image" src={this.imagePath(this.props.name)} alt=""/>
              </div>
              <div className="col-xs-12 col-sm-8">
                <p className="testimonial-text">{this.props.testimonial}</p>
              </div>
                <div className="testimonialAuthor col-xs-12 col-sm-8 col-sm-offset-4">
                  <p>{this.props.author}</p>
              </div>
        </div>
      </div>
    );
  };
}

export default Testimonial;
