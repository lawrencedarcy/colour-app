import React, { Component } from 'react';
import './ColorBox.css';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Link } from 'react-router-dom';
import chroma from 'chroma-js';
import { withStyles } from '@material-ui/styles';

const styles = {
  copyText: {
    color: props => 
    chroma(props.background).luminance() > 0.06 ? 'rgba(0,0,0,0.6)' : 'white'
  },

  colorName: {
    color: props =>  chroma(props.background).luminance() < 0.08 ? 'white' : 'rgba(0,0,0,0.6)'
  },

  seeMore: {
    color: props => chroma(props.background).luminance() < 0.08 ? 'white' : 'rgba(0,0,0,0.6)',
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    position: 'absolute',
    border: 'none',
    bottom: '0',
    right: '0',
    fontSize:' 0.8rem',
    width: '60px',
    height: '30px',
    textAlign: 'center',
    lineHeight: '30px',
    textTransform: 'uppercase',
  },

  copyButton:   {
  color: props => chroma(props.background).luminance() < 0.08 ? 'white' : 'rgba(0,0,0,0.6)',
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
  opacity: '0',
  textTransform: 'uppercase',
  border: 'none',
  textDecoration: 'none',
  cursor: 'pointer',
  letterSpacing: '2px'
  
  } ,

  boxContent: {

    padding: '10px',
    width: '100%',
    left: '0',
    bottom: '0',
    position: 'absolute',
    color: 'rgba(0, 0, 0, 0.973)',
    letterSpacing: '2px',
    textTransform: 'uppercase',
    fontSize: '0.65rem'
  },
  
  copyOverlay: {
    opacity: '0',
    zIndex: '0',
    width: '100%',
    height: '100%',
    opacity: '0',
    transition: 'transform 1.1s ease-in-out',
    transform: 'scale(0.01)'
  },

  ColorBox: {
    width: '20%',
    height: props => props.showingFullPalette ? '25%' : '50%',
    margin: '0 auto',
    display: 'inline-block',
    cursor: 'pointer',
    position: 'relative',
    marginBottom: '-4.5px',
    '&:hover button': {
      opacity: 1
    }
    
  },

 showOverlay: {
    position: 'absolute',
    zIndex: '10',
    opacity: '0.96',
    transform: 'scale(50)'
  },


copyMessage: {

  position: 'fixed',
  left:'0',
  right: '0',
  top: '0',
  bottom: '0',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '2rem',
  transform: 'scale(0.1)',
  color: 'rgba(255, 255, 255, 0.945)',
  opacity: '0',
  textTransform: 'uppercase',
  flexDirection: 'column',


  "& h1": {

  fontWeight: '300',
  textShadow: '1px 2px rgba(0, 0, 0, 0.925)',
  backgroundColor: 'rgba(255, 255, 255, 0.2)',
  width: '100%',
  textAlign: 'center',
  marginBottom: '0',
  padding: '1rem',
  textTransform: 'uppercase'}
, 
"& p": {
  fontSize: '1.5rem'
}

},

showMessage: {
  opacity: '1',
  transform:' scale(1)',
  zIndex: '25',
  transition: 'all 0.3 ease-in-out',
  transitionDelay: '0.4s'
},

};

class ColorBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      copied: false
    };

    this.changeCopyState = this.changeCopyState.bind(this);
  }

  changeCopyState(e) {
    this.setState({ copied: true }, () => {
      setTimeout(() => this.setState({ copied: false }), 1300);
    });
  }

  render() {
    const { name, background, paletteId, id, showingFullPalette, classes } = this.props;
    const { copied } = this.state;


    return (
      <CopyToClipboard text={background} onCopy={this.changeCopyState}>
        <div style={{ background }} className={classes.ColorBox}>
          <div
            style={{ background }}
            className={`${classes.copyOverlay} ${copied && classes.showOverlay}`}
          />
          <div className={`${classes.copyMessage} ${copied && classes.showMessage}`}>
            <h1>Copied to clipboard</h1>
            <p className={classes.copyText}>
              {background}
            </p>
          </div>
          <div>
            <div className={classes.boxContent}>
              <span className={classes.colorName}>{name}</span>
            </div>
            <button className={classes.copyButton}>
              Copy
            </button>
          </div>
          {showingFullPalette && (
            <Link
              to={`/palette/${paletteId}/${id}`}
              onClick={e => e.stopPropagation()}
            >
              <span className={classes.seeMore} >
                More
              </span>
            </Link>
          )}
        </div>
      </CopyToClipboard>
    );
  }
}

export default withStyles(styles)(ColorBox);
