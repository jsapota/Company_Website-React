import React, {Component} from 'react'
import './Benefit.css'

class Benefit extends Component {
  imagePath = (name) => {
    return "/images/tempLanding/" + name + ".png"
  };
  render() {
    return (
      <div className="benefit">
          <div className="col-sm-4 col-md-4 benefit-box">
            <img className="benefit-image" src={this.imagePath(this.props.name)} alt=""/>
            <h3 className="benefit-title">{this.props.title}</h3>
            <p className="benefit-desc">{this.props.desc}</p>
          </div>
      </div>
    )
  }
}

export default Benefit;