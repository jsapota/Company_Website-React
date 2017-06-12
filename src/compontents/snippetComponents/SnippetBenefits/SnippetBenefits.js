import React, {Component} from 'react';
import Benefit from '../SnippetBenefit/SnippetBenefit';
import './SnippetBenefits.css';

class SnippetBenefits extends Component {
  /*
   props for this component

   name - name of the component - mainly to get images
   title - show title
   description - description

   Put an png and gif files with `this.props.name` name to the ./public/images/snippets
   */
  render() {
    return (
        <section className="snippet-benefits">
          <div className="container">
            {this.props.benefits.map(function(benefit,i) {
              return <Benefit key={'benefit-key' + i} name={benefit.name} title={benefit.title} description={benefit.description} />
            })}
          </div>
        </section>
    );
  };
}

export default SnippetBenefits;

