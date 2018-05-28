import React, { Component } from 'react';
import SliderSlick   from 'react-slick';
import Rating from '../Rating/Rating';


class Reviews extends Component {
    render() {
        var settings = {
            dots: true,
            infinite: true,
            speed: 1500,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            autoplay: true,
            pauseOnHover: true,
            autoplaySpeed: 4000,
            className: 'reviews'
        };
        return (
          <section className="reviews">
            <h1 className='review-title'>Last Customer Reviews</h1>
            <SliderSlick {...settings}>
              <div className="review">
              <p>"We took a week trip and we would like to repeat it. It was really nice."</p>
                <Rating stars={4}/>
                <h2><a href="https://www.instagram.com/arnaldise/" target="_blank" rel="noopener noreferrer">Nany</a>, Barcelona Spain</h2>
              </div>
              <div className="review">
              <p>"Excellent option to travel with friends."</p>
                <Rating stars={5}/>
                <h2><a href="https://www.instagram.com/jesustorres38/">Jesus</a>, Bristol UK</h2>
              </div>
              <div className="review">
              <p>"I loved the sailboat, everything was clean and tidy very comfortable to go with children."</p>
                <Rating stars={4}/>
                <h2><a href='https://www.instagram.com/ekserna/'>Erika</a>, Barcelona Spain</h2>
              </div>
              <div className="review">
                <p>"It was an excellent trip everything was very good. I loved the view and the captain was very friendly."</p>
                <Rating stars={4.5}/>
                <h2><a>Jaume</a>, Barcelona Spain</h2>
              </div>
            </SliderSlick>
          </section>
        );
  }
}

export default Reviews;