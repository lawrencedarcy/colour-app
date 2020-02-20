import React, { Component } from "react";
import "./ColorBox.css";
import {CopyToClipboard} from 'react-copy-to-clipboard';

class ColorBox extends Component {
  render() {

    const {name, background} = this.props;
    return (
      <CopyToClipboard text={background}>
      <div style={{ background }} className="ColorBox">
        <div className="copy-container">
          <div className="box-content">
            <span>{name}</span>
            <button className="copy-button">
              Copy
            </button>
            <span className="see-more">More</span>
          </div>
        </div>
      </div>
      </CopyToClipboard>
    );
  }

}

export default ColorBox;