import React, {Component} from 'react'
import './FAQA.css'

class FAQA extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showState: 0,
      showClass: "answer hide",
    };
    this.showAnswer = this.showAnswer.bind(this);
  }
  showAnswer = () => {
    if(this.state.showState === 0) {
      this.setState({
        showClass: "answer show",
        showState: 1,
      });
    } else {
      this.setState({
        showClass: "answer hide",
        showState: 0
      });
    }
  };
  render() {
    return (
      <div className="FAQA">
        <div className="row">
          <div className="col-sm-12" onClick={this.showAnswer}>
            <p className="topic"><img className="listDecoration" src="/images/tempLanding/TopicPoint.png" alt=""/>{this.props.topic}</p>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12 answerBox">
            <p className={this.state.showClass}>{this.props.answer}</p>
          </div>
        </div>
      </div>
    );
  }
}
export default FAQA;