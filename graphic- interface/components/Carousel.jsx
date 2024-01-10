import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <Slider {...settings}>
      <div>
        <img src="../../assets/carouselImages/imagen_1.jpg" alt="img 1" className='img-carousel' />
      </div>
      <div>
        <img src="../../assets/carouselImages/imagen_2.jpg" alt="img 2" className='img-carousel'/>
      </div>
      <div>
        <img src="../../assets/carouselImages/imagen_3.jpg" alt="img 3" className='img-carousel'/>
      </div>
      <div>
        <img src="../../assets/carouselImages/imagen_4.jpg" alt="img 4" className='img-carousel'/>
      </div>
      <div>
        <img src="../../assets/carouselImages/imagen_5.jpg" alt="img 5" className='img-carousel'/>
      </div>
    </Slider>
  );
};


