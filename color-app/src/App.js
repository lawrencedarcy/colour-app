import React, { Component } from 'react';
import seedColors from './seedColors';
import Palette from './Palette';
import { generatePalette } from './colorHelpers';
import {Route, Switch} from 'react-router-dom';


class App extends Component {

  findPalette(id){
    return seedColors.find(function(palette){
      return palette.id === id;
    })
  }

  render() {
  return (
    <Switch>
    <Route exact path="/" render={() => <h1>hello</h1>}/>
    <Route exact path="/palette:id" render={(routeProps) => <Palette palette={generatePalette(this.findPalette(routeProps.match.params.id))}/>} />

    </Switch>

    
  );

  }
}

export default App;
