import React, { Component } from "react";
import { Link } from "react-router-dom";
import MiniPalette from "./MiniPalette";

import { withStyles } from "@material-ui/styles";
import { blue } from "@material-ui/core/colors";
import { flexbox } from "@material-ui/system";

const styles = {
  root: {
    height: '100%',
    backgroundColor: 'blue',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center'
  },
  container: {
    display: 'flex',
    width: '60%',
    alignItems: 'flex-start',
    flexDirection: 'column',
    flexWrap: 'wrap'
    
  },
  nav: {
      display: 'flex',
      width: '100%',
      justifyContent: 'space-between',
      color: 'white'
  },
  palettes: {
    boxSizing: 'border-box',
    width: "100%",
    display: "grid",
    gridTemplateColumns: 'repeat(3, 30%)',
    gridGrap: '5%'
  }
};

class PaletteList extends Component {

  constructor(props){
    super(props);
  
  }

  goToPalette(id){
    this.props.history.push(`/palette/${id}`)
  }
  render() {
    const { palettes, classes } = this.props;
    return (
      <div className={this.props.classes.root}>
        <div className={classes.container}>
          <nav className={classes.nav}>
            <h1>Pallette builder</h1>
          </nav>
          <div className={classes.palettes}>
            {palettes.map(palette => (
              <MiniPalette {...palette} handleClick={() => this.goToPalette(palette.id)}/>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(PaletteList);
