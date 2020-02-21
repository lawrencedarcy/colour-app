import React, { Component } from "react";
import "rc-slider/assets/index.css";
import Slider from "rc-slider";

import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';


import "./Navbar.css";

class Navbar extends Component {
  
  constructor(props) {
    super(props);
    this.state = {default : 'hex'}
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange (e) {
    this.setState({default: e.target.value});
    this.props.handleChange(e.target.value);
  }

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
        <div className="select-container" >
          <Select value={this.state.default} onChange={this.handleChange}>
            <MenuItem value="hex" >HEX - #FFFFFF </MenuItem>
            <MenuItem value="rgb" >RGB - rgb(255,255,255) </MenuItem>
            <MenuItem value="rgba" >RGBA - rgba(255,255,255,1.0) </MenuItem>
            </Select>
        </div>
      </header>
    );
  }
}

export default Navbar;
