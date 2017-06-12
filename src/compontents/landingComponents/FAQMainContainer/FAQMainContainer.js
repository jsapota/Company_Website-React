import React, {Component} from 'react'
import './FAQMainContainer.css'
import FAQSideCol from '../../landingComponents/FAQSideCol/FAQSideCol'
import FAQSection from '../../landingComponents/FAQSection/FAQSection'

class FAQMainContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      topicAndQuestions: [
        {
          "section": "Products",
          "topics": [
            {
              "topic": "REST API",
              "answer": "Big and nice answer"
            },
            {
              "topic": "SNIPPETS STORE",
              "answer": "Big and nice answer"
            },
            {
              "topic": "TEMPLATE CONVERTER",
              "answer": "Big and nice answer"
            }
          ],
        },
        {
          "section": "pricing",
          "topics": [
            {
              "topic": "company Free",
              "answer": "Big and nice answer"
            },
            {
              "topic": "company Premium",
              "answer": "Big and nice answer"
            },
            {
              "topic": "Vintage Special Clients",
              "answer": "Big and nice answer"
            }
          ],
        },
        {
          "section": "Privacy / Security",
          "topics": [
            {
              "topic": "Amazon Hosting",
              "answer": "Big and nice answer"
            },
            {
              "topic": "Client Sign UP & Log In",
              "answer": "Big and nice answer"
            },
            {
              "topic": "Terms Of Service",
              "answer": "Big and nice answer"
            }
          ],
        },
        {
          "section": "Payments",
          "topics": [
            {
              "topic": "Stripe Services",
              "answer": "Big and nice answer"
            },
            {
              "topic": "Payment Options",
              "answer": "Big and nice answer"
            },
            {
              "topic": "Special Discounts & Promotions",
              "answer": "Big and nice answer"
            }
          ],
        },
      ]
    }
  }
  render() {
    return (
      <div className="FAQMainContainer">
        <div className="container">
          <div className="row marginAboveFAQ">
            <div className="col-sm-8 mainCol">
              <div className="FAQHeader">
                <div className="row">
                  <p className="title">Frequently Asked Questions</p>
                  <p className="subtitle">Before reaching out to us,
                    maybe we can already help you! Choose by topics below.
                  </p>
                </div>
                <div className="row">
                  {this.state.topicAndQuestions.map(function(topicAndQuestions,i) {
                    return <FAQSection key={'testimonial-key' + i} section={topicAndQuestions.section} topics={topicAndQuestions.topics}/>
                  })}
                </div>
                <div className="row">
                  <div className="col-sm-12">
                    <div className="contactForm">
                      test
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-4 sideCol">
              <FAQSideCol/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FAQMainContainer;