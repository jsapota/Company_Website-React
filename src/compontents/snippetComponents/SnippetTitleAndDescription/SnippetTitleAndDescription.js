import React, {Component} from 'react';
import './SnippetTitleAndDescription.css';
/*
 props for this component

 name - name of the component - mainly to get images
 title - show title
 subtitle - show subtitle
 description - description

 Put an png and gif files with `this.props.name` name to the ./public/images/snippets
 */
class SnippetTitleAndDescription extends Component {
  constructor(props) {
    super(props);

    this.mouseOver = this.mouseOver.bind(this);
    this.mouseOut = this.mouseOut.bind(this);
    this.state = {isMouseOver: false};
  };
  mouseOver = () => {
    this.setState({isMouseOver: true});
  };
  mouseOut = () => {
    this.setState({isMouseOver: false});
  };
  imagePath = (imageName) => {
    return "/images/snippetImages/" + imageName;
  }
  backgroundImage = (state) => {
    if (state.isMouseOver === true) {
      return this.imagePath(this.props.name) + ".gif";
    } else {
      return this.imagePath(this.props.name) + ".png";
    }
  };
  render() {
    return (
      <section className="snippet-title-description">
        <div className="snippet-titles">
          <div className="container">
            <h1>{this.props.title}</h1>
            <h2>{this.props.subtitle}</h2>
          </div>
        </div>
        <div className="snippet-header">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-12">
                <div className="row"
                  onMouseOver={this.mouseOver.bind(this)}
                  onMouseOut={this.mouseOut.bind(this)}>
                    <div className="snippet-gif">
                      <img
                        src={(this.backgroundImage(this.state))}
                        alt="foo"/>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <a className="btn btn-company btn-block" href="/preview/restaurant-menu">Live preview</a>
                    </div>
                    <div className="col-md-6">
                      <a className="btn btn-company btn-block" href="#section-snippet-customizer">Use it</a>
                    </div>
                  </div>
              </div>
              <div className="col-lg-6  col-md-12 left-side">

                <div className="text-align-left">
                  <h1 className="snippet-title">{this.props.title}</h1>
                </div>
                <div className="text-align-left">
                  <h3 className="snippet-desc">{this.props.description}</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
}

export default SnippetTitleAndDescription;
