import React, {Component} from 'react';
import Testimonial from '../testimonial/Testimonial'
import './Testimonials.css'

class Testimonials extends Component {
  constructor(props) {
    super(props);
    this.state = {
      testimonials: [
        {
          "name": "test1",
          "testimonial": "Vivamus at magna non nunc Rehoncus. Aliquam nibh antegestas id dictum a, commodo. Praesenterto faucibus malesuada faucibus",
          "author": "Author, Company"
        },
        {
          "name": "test2",
          "testimonial": "Vivamus at magna non nunc Rehoncus. Aliquam nibh antegestas id dictum a, commodo. Praesenterto faucibus malesuada faucibus",
          "author": "Author, Company"
        },
      ]
    }
  };
  render() {
    return (
      <div className="container">
        <div className="row testimonials">
            {this.state.testimonials.map(function(testimonials,i) {
              return <Testimonial key={'testimonial-key' + i} name={testimonials.name} testimonial={testimonials.testimonial} author={testimonials.author} />
            })}
        </div>
      </div>
    );
  };
}

export default Testimonials;
