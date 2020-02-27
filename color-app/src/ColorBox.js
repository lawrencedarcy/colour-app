import React, { Component } from "react";
import "./ColorBox.css";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Link } from 'react-router-dom';
import chroma from 'chroma-js';

class ColorBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      copied: false
    };

    this.changeCopyState = this.changeCopyState.bind(this);
  }

  changeCopyState (e) {
    this.setState({ copied: true }, () => {

      setTimeout(() => this.setState({ copied: false }), 1300);
    });
    
  }

  render() {
    const { name, background, paletteId, id, showLink } = this.props;
    const { copied } = this.state;
    const isDark = chroma(background).luminance() <= 0.06;
    const isLight = chroma(background).luminance() >= 0.07;


    return (

      <CopyToClipboard text={background} onCopy={this.changeCopyState}>
        <div style={{ background }} className="ColorBox">
          <div style={{ background }} className={`copy-overlay ${copied && "show"}`} />
          <div className={`copy-msg ${copied && "show"}`}> 
          <h1>Copied to clipboard</h1>
    <p className={`${isLight && "dark-text" }`}>{background}</p>
          </div>
          <div className="copy-container">
            <div className="box-content">
              <span className={isDark && "light-text"}>{name}</span>
              </div>
              <button className={`copy-button ${isLight && "dark-text" }`}>Copy</button>
              </div>
              {showLink && (<Link to={`/palette/${paletteId}/${id}`} onClick={e => e.stopPropagation()}>
              <span className={`see-more ${isLight && "dark-text" } `}>More</span>
              </Link>)}
              
              </div>
            
              
        
      </CopyToClipboard>
    );
  }
}

export default ColorBox;
