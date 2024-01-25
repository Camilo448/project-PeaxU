import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../../assets/carouselImages/carrusel1.png";
import img2 from "../../assets/carouselImages/carrusel2.jpg";
import img3 from "../../assets/carouselImages/carrusel3.png";
import img4 from "../../assets/carouselImages/carrusel4.jpg";
import img5 from "../../assets/carouselImages/carrusel5.jpg";

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
      <div className="col-md-10 d-flex justify-content-center">
        <img src={img1} alt="img 1" className="img-carousel" />
      </div>
      <div>
        <img src={img2} alt="img 2" className="img-carousel" />
      </div>
      <div>
        <img src={img3} alt="img 3" className="img-carousel" />
      </div>
      <div>
        <img src={img4} alt="img 4" className="img-carousel" />
      </div>
      <div>
        <img src={img5} alt="img 5" className="img-carousel" />
      </div>
    </Slider>
  );
};
