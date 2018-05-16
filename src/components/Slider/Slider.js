import React, { Component } from 'react';
import SliderSlick   from 'react-slick';

// import './App.css';

function SampleNextArrow(props) {
  const {className, style, onClick} = props;
  return (
    <div
      className={className}
      style={{...style, display: 'block'}}
      onClick={onClick}
    >
    <i className="fas fa-angle-right"></i>
    </div>
  );
}

function SamplePrevArrow(props) {
  const {className, style, onClick} = props;
  return (
    <div
      className={className}
      style={{...style, display: 'block'}}
      onClick={onClick}
    >
    <i className="fas fa-angle-left"></i>
    </div>
  );
}

class Slider extends Component {
    render() {
        var settings = {
            dots: true,
            infinite: true,
            speed: 1500,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            autoplay: false,
            pauseOnHover: false,
            autoplaySpeed: 4000,
            className: 'slides',
            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow />
        };
        return (
          <SliderSlick {...settings}>
            <div className="slide_1">
              <h1>Welcome to Ventum</h1>
              <h2>Barcelona</h2>
            </div>
            <div className="slide_2">
              <h1>Welcome to Ventum</h1>
              <h2>Barcelona</h2>
            </div>
            <div className="slide_3">
              <h1>Welcome to Ventum</h1>
              <h2>Barcelona</h2>
            </div>
          </SliderSlick>
        );
  }
}

export default Slider;