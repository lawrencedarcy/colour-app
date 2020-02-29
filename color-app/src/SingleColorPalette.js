import React, { Component } from 'react';
import ColorBox from './ColorBox';
import Navbar from './Navbar';
import PaletteFooter from './PaletteFooter';
import './ColorBox.css';
import  { Link } from 'react-router-dom';

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
    const {paletteName , emoji, id} = this.props.palette;
    const colorBoxes = this._shades.map(color => (

      <ColorBox 
      key={color.name} 
      name={color.name} 
      background={color[format]}
      showingFullPalette={false} />
    ))

    console.log(colorBoxes);
    return (
      
      <div className="SingleColorPalette Palette">
        <Navbar handleChange={this.changeFormat} showingSlider={false}/>
        
    <div className="Palette-colors"> 
    {colorBoxes}
    <div className="go-back ColorBox">
      <Link className="back-button" to={`/palette/${id}`}>GO BACK </Link>
    </div>
    </div>
    <PaletteFooter paletteName={paletteName} emoji={emoji} />
      </div>
    );
  }
}

export default SingleColorPalette;