import React, { Component } from "react";
import { Link } from 'react-router-dom';
import classNames from "classnames";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import Button from "@material-ui/core/button"
import { ChromePicker } from 'react-color';
import { ValidatorForm, TextValidator} from "react-material-ui-form-validator";
import {SortableContainer, SortableElement} from 'react-sortable-hoc';


import { uniqueNamesGenerator, adjectives, colors, animals } from 'unique-names-generator';
// https://www.npmjs.com/package/unique-names-generator


class PaletteFormNav extends Component {
  constructor(props){
    super(props);
    this.state = {
      newPaletteName: ''
    }

    this.handleFormChange = this.handleFormChange.bind(this);
  }
onSub

  handleFormChange(e) {
    this.setState({

      [e.target.name]: e.target.value
    });
  }

  render() {
    const { classes, open } = this.props;
    return (
      <div>
                <CssBaseline />
        <AppBar
          position='fixed'
          color="default"
          className={classNames(classes.appBar, {
            [classes.appBarShift]: open
          })}
        >
          <Toolbar disableGutters={!open}>
            <IconButton
              color='inherit'
              aria-label='Open drawer'
              onClick={this.props.handleDrawerOpen}
              className={classNames(classes.menuButton, open && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant='h6' color='inherit' noWrap>
              Create a new palette
            </Typography>
            <ValidatorForm onSubmit={() => this.props.handleSubmit(this.state.newPaletteName)}>
            <TextValidator 
            value={this.state.newPaletteName}
             label="Palette Name" 
             onChange={this.handleFormChange}
             name="newPaletteName"
             validators={["required"]}
             errorMessages={['Please enter a palette name']} />

            <Button
            type="submit" 
            variant="contained" 
            color="primary" 
            >
              Save palette
              </Button>
              <Link to="/">
              <Button variant="contained" color="secondary">Go back</Button>
              </Link>
              </ValidatorForm>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default PaletteFormNav;