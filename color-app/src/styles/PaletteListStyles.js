import { blue } from "@material-ui/core/colors";
import { flexbox } from "@material-ui/system";


export default {
  root: {
    height: '150vh',
    backgroundColor: 'blue',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center'
  },

  '@media (max-width: 520px)': {
    root: {
      width: '100%',
      alignItems: 'flex-start',
      justifyContent: 'flex-end'
    }
  },
  
  container: {
    display: 'flex',
    width: '60%',
    alignItems: 'flex-start',
    flexDirection: 'column',
    flexWrap: 'wrap',
    marginTop: '4vh'
  },

  

  '@media (max-width: 880px)': {
    container: {
      width: '80%',
      alignItems: 'center',
      justifyContent: 'center'
    }
  },

  nav: {
      display: 'flex',
      width: '100%',
      
      justifyContent: 'space-between',
      alignItems: 'center',
      color: 'white',
      "& a": {
        color: 'white',
        textDecoration: 'none'
      },
      marginBottom: '4vh'
     
  },


  palettes: {
    boxSizing: 'border-box',
    width: "100%",
    display: "grid",
    gridTemplateColumns: 'repeat(3, 30%)',
    gridGap: '4%'
  },

  '@media (max-width: 670px)': {
    palettes: {
      gridTemplateColumns: 'repeat(2, 50%) !important',
      gridGap: '2%'
    }
  },

  '@media (max-width: 500px)': {
    palettes: {
      gridTemplateColumns: 'repeat(1, 75%) !important',
      gridGap: '1%'
    }
  },

  
};
