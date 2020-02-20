import React, { Component } from "react";
import "rc-slider/assets/index.css";
import Slider from "rc-slider";

import "./Navbar.css";

class Navbar extends Component {
  render() {
    const { level, changeLevel } = this.props;
    return (
      <header className="Navbar">
        <div className="logo">
          <a href="">PALETTE BUILDER</a>
          </div>

          <div className="slider-container">
            <span>LEVEL: {level}</span>
            <div className="slider">
              <Slider
                defaultValue={level}
                min={100}
                max={900}
                onAfterChange={changeLevel}
                step={100}
              />
            </div>
          </div>
        
      </header>
    );
  }
}

export default Navbar;
