import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import SliderSlick   from 'react-slick';

// import './App.css';

class Slider extends Component {
    render() {
        var settings = {
            dots: true,
            infinite: true,
            speed: 1000,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            autoplay: false,
            pauseOnHover: false,
            autoplaySpeed: 4000,
            className: 'slides'
        };
        return (
          <SliderSlick {...settings}>
            <div className="slide_1">
            </div>
            <div className="slide_2">
            </div>
            <div className="slide_3">
            </div>
          </SliderSlick>
        );
  }
}

export default Slider;