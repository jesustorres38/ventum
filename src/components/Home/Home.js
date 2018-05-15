import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import Slider from '../Slider/Slider';
import Reviews from '../Reviews/Reviews';


class Home extends Component {
  render() {
    return (
      <div className="Home">
          <Slider />
          <Reviews />
      </div>
    );
  }
}

export default Home;