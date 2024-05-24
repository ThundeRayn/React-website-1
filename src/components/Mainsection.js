import React from 'react';
import '../App.css';
import { Button } from './Button';
import './Mainsection.css';

function Mainsection() {
  return (
    <div className='main-container'>
      <video src="../videos/video-1.mp4" autoPlay loop musted />
      <h1>ONETRACK REGISTER PAGE</h1>
      <div className='hero-btns'>
        <Button 
            className='btns'
            buttonStyle='btn--outline'
            buttonSize='btn--large'
        >
            ACCEPT
        </Button>
        <Button 
            className='btns'
            buttonStyle='btn--primary'
            buttonSize='btn--large'
            onClick={console.log('hey')}
        >
            LOGIN <i className='far fa-play-circle'/>
        </Button>
      </div>
    </div>
  )
}

export default Mainsection;
