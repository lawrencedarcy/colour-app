import React, { Component } from "react";
import { Link } from "react-router-dom";
import MiniPalette from "./MiniPalette";

import { withStyles } from "@material-ui/styles";
import { blue } from "@material-ui/core/colors";
import { flexbox } from "@material-ui/system";
import styles from './styles/PaletteListStyles'


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
            <Link to="palette/new">Create a palette</Link>
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
