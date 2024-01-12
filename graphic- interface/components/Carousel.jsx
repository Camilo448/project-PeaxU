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
      <div className="col-md-10 d-flex justify-content-center" >
        <img src="../../assets/carouselImages/carrusel1.png" alt="img 1" className='img-carousel'/>
      </div>
      <div>
        <img src="../../assets/carouselImages/carrusel2.jpg" alt="img 2" className='img-carousel'/>
      </div>
      <div>
        <img src="../../assets/carouselImages/carrusel3.png" alt="img 3" className='img-carousel'/>
      </div>
      <div>
        <img src="../../assets/carouselImages/carrusel4.jpg" alt="img 4" className='img-carousel'/>
      </div>
      <div>
        <img src="../../assets/carouselImages/carrusel5.jpg" alt="img 5" className='img-carousel'/>
      </div>
    </Slider>
  );
};


