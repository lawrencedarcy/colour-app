import React, { Component } from "react";
import "rc-slider/assets/index.css";
import Slider from "rc-slider";
import {Link} from 'react-router-dom';
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";

import "./Navbar.css";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      default: "hex",
      open: false
    };

    this.handleFormatChange = this.handleFormatChange.bind(this);
    this.closeSnackbar = this.closeSnackbar.bind(this);

  }

  handleFormatChange(e){
    this.setState({ default: e.target.value, open: true });
    this.props.handleChange(e.target.value);
  }

  closeSnackbar() {
    this.setState=({open: false});

  }

  render() {
    const { level, changeLevel } = this.props;
  
    return (
      <header className="Navbar">
        <div className="logo">
          <Link to="/"> PALETTE BUILDER </Link>
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
        <div className="select-container">
          <Select value={this.state.default} onChange={this.handleFormatChange}>
            <MenuItem value="hex">HEX – #FFFFFF </MenuItem>
            <MenuItem value="rgb">RGB - rgb(255,255,255) </MenuItem>
            <MenuItem value="rgba">RGBA - rgba(255,255,255,1.0) </MenuItem>
          </Select>
        </div>
        <Snackbar
          anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
          open={this.state.open}
          autoHideDuration={2100}
          onClose={() => this.setState({open: false})}
    message={<span id="message-id">Format changed to {this.state.default.toUpperCase()}</span>}
          
          action={[
            <IconButton onClick={() => this.setState({open: false})} >
              <CloseIcon  color='inherit' key='close' />
            </IconButton>
          ]}
          
        />
      </header>
    );
  }
}

export default Navbar;
