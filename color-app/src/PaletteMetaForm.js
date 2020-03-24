

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { ValidatorForm, TextValidator} from "react-material-ui-form-validator";
import React, { Component } from 'react';


class PaletteMetaForm extends Component {

  constructor (props){
    super(props);

    this.state = {
      newPaletteName: ''
    }

    this.handleFormChange = this.handleFormChange.bind(this);
  }

  handleFormChange(e) {
    this.setState({

      [e.target.name]: e.target.value
    });
  }

  render() {
    return (
      <ValidatorForm onSubmit={() => this.props.handleSubmit(this.state.newPaletteName)}>
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
    );
  }
}

export default PaletteMetaForm;