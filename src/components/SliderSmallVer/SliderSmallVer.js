import React, { Component } from 'react'
import SliderSlick   from 'react-slick'

class SliderSmallVer extends Component {

    constructor(props){
      super(props);
      console.log(props.images);
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
            className: 'slidesSmallVer'
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

export default SliderSmallVer;