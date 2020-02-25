import React, { Component } from 'react';
import ColorBox from './ColorBox';
import Navbar from './Navbar';

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
      shades= shades.concat
      (allColors[key].filter(color => color.id === colorToFilterBy));
    }

    return shades.slice(1);

  }

  render() {
    const { format } = this.state;
    const colorBoxes = this._shades.map(color => (

      <ColorBox 
      key={color.id} 
      name={color.name} 
      background={color[format]}
      showLink={false} />
    ))

    console.log(colorBoxes);
    return (
      
      <div className="Palette">
        <Navbar handleChange={this.changeFormat} showingSlider={false}/>
        
    <div className="Palette-colors"> {colorBoxes}</div>
      </div>
    );
  }
}

export default SingleColorPalette;