import React, {Component} from 'react'
import './PricingElement.css'

class PricingElement extends Component {
  constructor(props) {
    super(props);
    this.listFeatures = this.listFeatures.bind(this);
    this.setColor = this.setColor.bind(this);
  };

  listFeatures = (features, color) => {
    const listItems = features.map((feature) =>
      <li className="pricing-feature">{feature}</li>
    );
    var buttonColor = {
      "background": color,
      "&:hover": color,
      "&:active": color,
      "&:focus": color,
      "&:visited": color,
    };
    return (
      <ul>{listItems}
      <li className="pricing-feature sign_in-button">
        <a href="#" className="btn btn-social btn-google" style={buttonColor}>
          <i className="fa fa-google"></i><p>Sign in with Google</p>
        </a>
      </li>
      </ul>
    )
  };

  setColor = (color) => {
    return {"color": color}
  };

  render() {
    return (
      <div className="row pricing-element" style={this.setColor(this.props.mainColor)}>
        <div className="col-sm-6 col-sm-offset-2">
          <div className="row">
            <div className="col-sm-12 col-sm-offset-2">
              <p className="pricing-title">{this.props.title}</p>
              <p className="pricing-title--sub">{this.props.subtitle}</p>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12 col-sm-offset-2">
              {this.listFeatures(this.props.features,this.props.mainColor)}
            </div>
          </div>
        </div>
        <div className="col-sm-4">
          <p className="pricing-price--style">
            <sup className="pricing-dolar"> $</sup>{this.props.price}
          </p>
          <p className="pricing-title--sub">{this.props.subpriceText}</p>
          <p className="pricing-title--sub">{this.props.subpriceTextSecond}</p>
        </div>
      </div>
    );
  };
}

export default PricingElement;