import React, { Component } from 'react'
import Slider from '../Slider/Slider'
import Reviews from '../Reviews/Reviews'
import Options from '../Options/Options'
import AOS from 'aos'


class Home extends Component {

  componentDidMount(){
    AOS.init();
  }

  render() {
    return (
      <div className="Home" data-aos="fade-up" data-aos-duration='1600' >
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