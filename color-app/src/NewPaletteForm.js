import React, { Component } from "react";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
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
import DraggableColorList from './DraggableColorList';
import { arrayMove } from 'react-sortable-hoc';


const drawerWidth = 300;

const styles = theme => ({
  root: {
    display: "flex"
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
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
  hide: {
    display: "none"
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: "0 8px",
    ...theme.mixins.toolbar,
    justifyContent: "flex-end"
  },
  content: {
    height: 'calc(100vh - 64px)',
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    marginLeft: -drawerWidth
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginLeft: 0
  }
});

class NewPaletteForm extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      open: true, 
      currentColor: 'teal',
      colors: [{color: "blue", name: "blue"}],
      newColorName: '',
      newPaletteName: ''
    }
    this.savePalette = this.savePalette.bind(this);
    this.updateCurrentColor = this.updateCurrentColor.bind(this);
    this.addNewColor = this.addNewColor.bind(this);
    this.handleFormChange = this.handleFormChange.bind(this);
    this.removeColor = this.removeColor.bind(this);
  }

  updateCurrentColor(newColor) {
    this.setState({currentColor: newColor.hex})
  }

  addNewColor() {
    const newColor = {color: this.state.currentColor, name: this.state.newColorName}
    this.setState({colors: [...this.state.colors, newColor]})
  }


  onSortEnd = ({oldIndex, newIndex}) => {
    this.setState(({colors}) => ({
      colors: arrayMove(colors, oldIndex, newIndex),
    }));
  };

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  handleFormChange(e) {
    this.setState({

      [e.target.name]: e.target.value
    });
  }

  savePalette (){
    let newColorName = this.state.newPaletteName;
    const newPalette = {
      paletteName: newColorName, 
      colors: this.state.colors, 
      id: newColorName.replace(/ /g, '-') }
    this.props.savePalette(newPalette);
    this.props.history.push('/');

  }
 
  removeColor (colorName){
    this.setState({
      colors: this.state.colors.filter(color => color.name !== colorName)
    })
  }
  

  render() {
    const { classes } = this.props;
    const { open } = this.state;

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
              onClick={this.handleDrawerOpen}
              className={classNames(classes.menuButton, open && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant='h6' color='inherit' noWrap>
              Create a new palette
            </Typography>
            <ValidatorForm onSubmit={this.savePalette}>
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
              </ValidatorForm>
          </Toolbar>
        </AppBar>
        <Drawer
          className={classes.drawer}
          variant='persistent'
          anchor='left'
          open={open}
          classes={{
            paper: classes.drawerPaper
          }}
        >
          <Divider />
          <Typography variant="h5">Design your palette</Typography>
          <div><Button variant="contained" color="secondary">Clear palette</Button>
          <Button 
          style={{backgroundColor: this.state.currentColor}}
          variant="contained" 
          color="primary">Random colour</Button></div>
          

          <ChromePicker color={this.state.currentColor}  onChangeComplete={this.updateCurrentColor} />
          <ValidatorForm onSubmit={this.addNewColor}> 

            <TextValidator 
            value={this.state.newColorName} 
            name="newColorName"
            onChange={this.handleFormChange}
            validators={["required"]}
            errorMessages={["Please add a name"]}
            />
          
          <Button 
            type="submit"
            variant="contained" 
            color='primary'
            style={{backgroundColor: this.state.currentColor}}
            
            >
              
              Add colour</Button>
          </ValidatorForm>
          
          <div className={classes.drawerHeader}>
          

            <IconButton onClick={this.handleDrawerClose}>
              <ChevronLeftIcon />
            </IconButton>
          </div>
          
        </Drawer>

        <main
          className={classNames(classes.content, {
            [classes.contentShift]: open
          })}
        >
          <div className={classes.drawerHeader} />
           <DraggableColorList 
           colors={this.state.colors}
           removeColor={this.removeColor}
           axis="xy"
           onSortEnd={this.onSortEnd}
           />
 
        </main>
      </div>
    );
  }
}
export default withStyles(styles, { withTheme: true })(NewPaletteForm);