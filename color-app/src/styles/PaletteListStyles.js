import { blue } from "@material-ui/core/colors";
import { flexbox } from "@material-ui/system";


export default {
  root: {
    height: '110vh',
    backgroundColor: 'blue',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center'
  },
  container: {
    display: 'flex',
    width: '50%',
    alignItems: 'flex-start',
    flexDirection: 'column',
    flexWrap: 'wrap'
    
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
      }
     
  },
  palettes: {
    boxSizing: 'border-box',
    width: "100%",
    display: "grid",
    gridTemplateColumns: 'repeat(3, 30%)',
    gridGap: '4%'
  }
};
