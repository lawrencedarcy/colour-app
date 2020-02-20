import React, { Component } from 'react';
import seedColors from './seedColors';
import Palette from './Palette';
import { generatePalette } from './colorHelpers'

class App extends Component {

  render() {
  return (

   
      <div >
      
    {console.log(generatePalette(seedColors[4]))}
      <Palette {...seedColors[4]} />
      </div>
      
   
  );

  }
}

export default App;
