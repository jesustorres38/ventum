import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import Slider from '../Slider/Slider';

// import './App.css';

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <div className="Slider_Container">
          <Slider />
        </div>
      </div>
    );
  }
}

export default Home;