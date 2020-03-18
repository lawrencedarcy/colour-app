import React, { Component } from 'react';
import Button from "@material-ui/core/button"
import { ChromePicker } from 'react-color';
import { ValidatorForm, TextValidator} from "react-material-ui-form-validator";

class ColorPickerForm extends Component {

  constructor (props) {
    super(props);
    this.state = {
      currentColor: "#218585",
      newColorName: '',
    }

    this.updateCurrentColor = this.updateCurrentColor.bind(this);
    this.handleFormChange = this.handleFormChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount(){
    ValidatorForm.addValidationRule('isColorNameUnique', (value) => 
    
      this.state.colors.every(
        ({ name }) => name.toLowerCase() !== value.toLowerCase()
      )
    )
  }

  updateCurrentColor(newColor) {
    this.setState({currentColor: newColor.hex})
  }

  handleFormChange(e) {
    this.setState({

      [e.target.name]: e.target.value
    });
  }

  handleSubmit(){
    const newColor = {color: this.state.currentColor, name: this.state.newColorName}
    this.props.addNewColor(newColor);
    this.setState({newColorName: ''});
  }
  render() {


    return (
      <div>
        
        <ChromePicker color={this.state.currentColor}  onChangeComplete={this.updateCurrentColor} />
          <ValidatorForm onSubmit={this.handleSubmit}> 

            <TextValidator 
            value={this.state.newColorName} 
            name="newColorName"
            onChange={this.handleFormChange}
            validators={["required", 'isColorNameUnique']}
            errorMessages={["Please add a name", "That name is taken."]}
            />
          
          <Button 
            type="submit"
            variant="contained" 
            color='primary'
            style={{backgroundColor: this.state.currentColor}}
            
            >
              
              Add colour</Button>
          </ValidatorForm>
          
        
          
      </div>
    );
  }
}

export default ColorPickerForm;