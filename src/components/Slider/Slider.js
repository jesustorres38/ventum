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
                {/* <img src='/images/1.jpg' alt="Ventum Barcelona Slider-1" /> */}
            </div>
            <div>
                {/* <img src='/images/2.jpg' alt="Ventum Barcelona Slider-2" /> */}
            </div>
            <div>
                {/* <img src='/images/3.jpg' alt="Ventum Barcelona Slider-3" /> */}
            </div>
          </SliderSlick>
        );
  }
}

export default Slider;