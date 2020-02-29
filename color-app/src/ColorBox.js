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
  },

  ColorBox: {
    width: '20%',
    height: props => props.showingFullPalette ? '25%' : '50%',
    margin: '0 auto',
    display: 'inline-block',
    cursor: 'pointer',
    position: 'relative',
    marginBottom: '-4.5px',
    '&hover button': {
      opacity: 1
    } 
  }


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
            className={`copy-overlay ${copied && 'show'}`}
          />
          <div className={`copy-msg ${copied && 'show'}`}>
            <h1>Copied to clipboard</h1>
            <p className={classes.copyText}>
              {background}
            </p>
          </div>
          <div className='copy-container'>
            <div className='box-content'>
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
