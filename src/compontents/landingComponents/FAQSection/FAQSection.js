import React, {Component} from 'react'
import './FAQSection.css'
import FAQA from '../FAQA/FAQA'

class FAQSection extends Component {
  render() {
    return (
      <div className="FAQSection">
        <div className="row">
          <div className="FAQSectionTitle">
            <p> {this.props.section}</p>
          </div>
        </div>
        <div className="row">
          {this.props.topics.map(function(topics,i) {
            return <FAQA key={'testimonial-key' + i} topic={topics.topic} answer={topics.answer}/>
          })}
        </div>
      </div>
    );
  }
}
export default FAQSection;