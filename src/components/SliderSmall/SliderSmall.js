import React, { Component } from 'react'
import SliderSlick   from 'react-slick'

class SliderSmall extends Component {

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
            {this.props.images.map((x,i)=>{
              return (
                <div key={x+i} className="slide_1">
                  <img src={x.url} alt='equipment'/>
                </div>
              )
            })}
          </SliderSlick>
        );
  }
}

export default SliderSmall;