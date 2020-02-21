import React, { Component } from 'react';
import seedColors from './seedColors';
import Palette from './Palette';
import { generatePalette } from './colorHelpers'

class App extends Component {

  render() {
  return (

   
      <div >
      
    
      <Palette palette={generatePalette(seedColors[1])} />
      </div>
      
   
  );

  }
}

export default App;
