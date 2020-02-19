import React from 'react';
import seedColors from './seedColors'

import Palette from './Palette';

function App() {
  return (
    <div className="Palette">
     { /* Navbar here */}
      <div className="Palette-colors">
      { /* color boxes here */}
      <Palette palette={...seedColors[5]} />
      </div>
      {/* footer */}
    </div>
  );
}

export default App;
