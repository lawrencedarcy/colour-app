import React, { Component } from 'react';
import ColorBox from './ColorBox';
import Navbar from './Navbar';
import PaletteFooter from './PaletteFooter';
import './ColorBox.css';
import  { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/styles';


const styles = {
  Palette: {

    height: '100vh',
    display: 'flex',
    flexDirection: 'column'
    
    },

    PaletteColors: {
      height: '90%'
    },

    goBack: {
      
        width: '20%',
        height: '50%',
        margin: '0 auto',
        display: 'inline-block',
        cursor: 'pointer',
        position: 'relative',
        marginBottom: '-4.5px',
        backgroundColor: 'black',
        opacity: '1',
        

        '& a': {
          color: 'white',
          width: '90px',
          height: '30px',
          position: 'absolute',
          display: 'inline-block',
          top: '50%',
          left: '50%',
          marginLeft: '-45px',
          marginTop: '-15px',
          outline: 'none',
          textAlign: 'center',
          backgroundColor: 'rgba(255, 255, 255, 0.3)',
          fontSize: '1rem',
          lineHeight: '30px',
          
          textTransform: 'uppercase',
          border: 'none',
          textDecoration: 'none',
          cursor: 'pointer',
          letterSpacing: '2px'
        }
       
    }
    
    

};


class SingleColorPalette extends Component {
  constructor (props) {
    super(props);
    this._shades = this.gatherShades(this.props.palette, this.props.colorId);
    this.state = { format: "hex"};
    this.changeFormat = this.changeFormat.bind(this);
  }

  changeFormat(val) {
    this.setState({ format: val });
  }

  gatherShades(palette, colorToFilterBy) {
    //return all shades of given colour
    let shades = [];
    let allColors = palette.colors;

    for (let key in allColors){
      shades = shades.concat
      (allColors[key].filter(color => color.id === colorToFilterBy));
    }

    return shades.slice(1);

  }

  render() {
    const { format } = this.state;
    const {classes } = this.props;
    const {paletteName , emoji, id} = this.props.palette;
    const colorBoxes = this._shades.map(color => (

      <ColorBox 
      key={color.name} 
      name={color.name} 
      background={color[format]}
      showingFullPalette={false} />
    ))

    ;
    return (
      
      <div className={classes.Palette}>
        <Navbar handleChange={this.changeFormat} showingSlider={false} />
        
    <div className={classes.PaletteColors} > 
    {colorBoxes}
    <div className={classes.goBack}>
      <Link className="back-button" to={`/palette/${id}`}>GO BACK </Link>
    </div>
    </div>
    <PaletteFooter paletteName={paletteName} emoji={emoji} />
      </div>
    );
  }
}

export default withStyles(styles)(SingleColorPalette);