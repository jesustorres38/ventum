import React, { Component } from 'react'
import SliderSlick   from 'react-slick'

class SliderSmall extends Component {

    constructor(props){
      super(props);
      console.log(props);
    }
    render() {
        var settings = {
            dots: true,
            infinite: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            autoplay: false,
            pauseOnHover: true,
            autoplaySpeed: 4500,
            className: 'slidesSmall'
        };
        return (
          <SliderSlick {...settings}>
            <div className="slide_1">
              <img src='/images/slide-1.png' alt='equipment'/>
            </div>
            <div className="slide_1">
              <img src='/images/slide-1.png' alt='equipment'/>
            </div>
          </SliderSlick>
        );
  }
}

export default SliderSmall;