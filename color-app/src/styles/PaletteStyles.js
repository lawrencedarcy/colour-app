export default {
  Palette: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column'
  },

  PaletteColors: {
    height: '90%'
  },

  goBack: {
    width: '20%',
    height: '50%',
    margin: '0 auto',
    display: 'inline-block',
    cursor: 'pointer',
    position: 'relative',
    marginBottom: '-4.5px',
    backgroundColor: 'black',
    opacity: '1',

    '& a': {
      color: 'white',
      width: '90px',
      height: '30px',
      position: 'absolute',
      display: 'inline-block',
      top: '50%',
      left: '50%',
      marginLeft: '-45px',
      marginTop: '-15px',
      outline: 'none',
      textAlign: 'center',
      backgroundColor: 'rgba(255, 255, 255, 0.3)',
      fontSize: '1rem',
      lineHeight: '30px',

      textTransform: 'uppercase',
      border: 'none',
      textDecoration: 'none',
      cursor: 'pointer',
      letterSpacing: '2px'
    }
  }
};
