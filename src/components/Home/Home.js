import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import Slider from '../Slider/Slider';
import Reviews from '../Reviews/Reviews';
import Options from '../Options/Options';


class Home extends Component {
  render() {
    return (
      <div className="Home">
          <Slider />
          <h1 className='title'>Ventum</h1>
          <p className='description'>Ventum is a vital experience, navigating all those seas of the world, respecting and enjoying them. Sharing trips with other sailors, crew and friends.</p>
          <Options />
          <Reviews />
      </div>
    );
  }
}

export default Home;