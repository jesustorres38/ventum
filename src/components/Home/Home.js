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
          <p className='description'>Ut euismod sed quam vel dapibus. Nullam porttitor urna sit amet tellus euismod, sit amet dictum diam tempor. Mauris pharetra fermentum mi id egestas. Praesent ullamcorper placerat nibh et elementum. Cras ut commodo risus. Phasellus sit amet ligula sem. Suspendisse pharetra tristique feugiat.</p>
          <Options />
          <Reviews />
      </div>
    );
  }
}

export default Home;