import React, {Component} from 'react';
import './SnippetSmallBox.css';

class SnippetSmallBox extends Component {
  /*
   props for this component

   name - name of the component - mainly to get images
   title - show title
   description - description

   Put an png and gif files with `this.props.name` name to the ./public/images/snippets
  */
  constructor(props) {
    super(props);

    this.mouseOver = this.mouseOver.bind(this);
    this.mouseOut = this.mouseOut.bind(this);
    this.handleHref = this.handleHref.bind(this);
    this.state = { isMouseOver: false };
  };
  mouseOver = () => {
    this.setState({ isMouseOver: true });
  };
  mouseOut = () => {
    this.setState({ isMouseOver: false });
  };
  imagePath = (imageName) => {
    return "/images/" + imageName;
  };
  handleHref= () => {
    window.location = this.props.url;
  };
  backgroundImage = (state) => {
    if (state.isMouseOver === true) {
      return this.imagePath(this.props.name) + ".gif";
    } else {
      return this.imagePath(this.props.name) + ".png";
    }
  };
  render() {
    return (
      <div className="snippet-small-box">
        <div onClick={this.handleHref}>
          <div
            onMouseOver={this.mouseOver.bind(this)}
            onMouseOut={this.mouseOut.bind(this)} >
            
            <div className="box-image">
              <img
                src={(this.backgroundImage(this.state))}
                alt="foo"/>
            </div>
            
            <div className="box-text">
              <h1 className="snippet-text">{this.props.title}</h1>
              <p className="snippet-text">{this.props.description}</p>
            </div>
          </div>
        </div>
      </div>
    );
  };
}

export default SnippetSmallBox;
