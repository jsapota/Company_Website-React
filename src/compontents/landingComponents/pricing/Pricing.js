import React, {Component} from 'react'
import PricingElement from '../pricingElement/PricingElement'
import './Pricing.css'

class Pricing extends Component {
  render() {
    return (
      <div className="pricing">
        <div className="container">
          <div className="row ">
            {
              this.props.plans.map(function(plans,i) {
                return <PricingElement  key={'pricing-element-key' + i}
                                        mainColor={plans.mainColor}
                                        title={plans.title}
                                        subtitle={plans.subtitle}
                                        features={plans.features}
                                        price={plans.price}
                                        subpriceText={plans.subpriceText}
                                        subpriceTextSecond={plans.subpriceTextSecond}
                />
              })}
          </div>
        </div>
      </div>
    );
  };
}

export default Pricing;