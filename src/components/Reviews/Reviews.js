import React, { Component } from 'react';
import SliderSlick   from 'react-slick';


class Reviews extends Component {
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
            className: 'reviews'
        };
        return (
          <section className="reviews">
            <h1>Customer Reviews</h1>
            <SliderSlick {...settings}>
              <div className="review-1">
                <h1>comentario</h1>
                <h2>estrellas</h2>
              </div>
              <div className="review-2">
                <h1>comentarios</h1>
                <h2>estrellas</h2>
              </div>
              <div className="review-3">
                <h1>comentarios</h1>
                <h2>estrellas</h2>
              </div>
            </SliderSlick>
          </section>
        );
  }
}

export default Reviews;