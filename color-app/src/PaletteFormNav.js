import React, { Component } from "react";
import { Link } from 'react-router-dom';
import classNames from "classnames";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Button from "@material-ui/core/button"
import { ValidatorForm, TextValidator} from "react-material-ui-form-validator";
import { withStyles } from "@material-ui/core/styles";
import { uniqueNamesGenerator, adjectives, colors, animals } from 'unique-names-generator';
// https://www.npmjs.com/package/unique-names-generator

import PaletteMetaForm from './PaletteMetaForm';

const drawerWidth = 300;
const styles = theme => ( {

  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    flexDirection: "row",
    justifyContent: "space-between",
    height: "4rem"
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 20
  },
  navBtns: {

  },
  root: {
    display: "flex"
  }
});

class PaletteFormNav extends Component {
  constructor(props){
    super(props);
   
  }



  render() {
    const { classes, open } = this.props;
    return (
      <div className={classes.root}>
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
            
          </Toolbar>
          <div className={classes.navBtns}>
            <PaletteMetaForm />
            
              <Link to="/">
              <Button variant="contained" color="secondary">Go back</Button>
              </Link>
              </div>
        </AppBar>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(PaletteFormNav);