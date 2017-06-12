import React, {Component} from 'react'
import Benefit from '../benefit/Benefit'

import './Benefits.css'

class Benefits extends Component {
  render() {
    return (
      <div className="benefits">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <h1 className="benefits-title">Why use company?</h1>
            </div>
          </div>
          <div className="row">
            {this.props.benefits.map(function(benefits,i) {
              return <Benefit key={'benefit-key' + i} name={benefits.name} title={benefits.title} desc={benefits.desc} />
            })}
        </div>
        </div>
      </div>
    )
  }
}

export default Benefits;