import React from 'react';
import { withStyles } from "@material-ui/core/styles";
import { classes } from 'istanbul-lib-coverage';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';


const styles = {

  root:   { width: '25%',
  height: '25%',
  margin: '0 auto',
  display: 'inline-block',
  cursor: 'pointer',
  position: 'relative',
  marginBottom: '-4.5px',
  "&:hover svg": {
    color: 'white',
    transform: "scale(1.3)"
},

  },

boxContent: {
  padding: '10px',
  width: '100%',
  left: '0',
  bottom: '0',
  position: 'absolute',
  color: 'rgba(0, 0, 0, 0.573)',
  letterSpacing: '2px',
  textTransform: 'uppercase',
  fontSize: '0.65rem',
  display: 'flex',
  justifyContent: 'space-between'
},

deleteIcon: {
  transition: "all 0.4s ease-in-out",
}

  

}

function DraggableColorBox(props) {
  const { classes } = props;
  return(  
     <div
     className={classes.root} 
     style={{backgroundColor: props.color}}> 
     <div className={classes.boxContent}>
    <span>{props.name} </span>
    <span><DeleteOutlinedIcon className={classes.deleteIcon} /></span>
    
    </div>
      </div>
    )


}


export default withStyles(styles)(DraggableColorBox)