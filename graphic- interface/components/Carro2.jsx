import React from 'react'



export const Carro2 = () => {

  return (
    <>
    <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
      <ol className="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
      </ol>

      <div className="carousel-inner">

        <div className="carousel-item active">
          <img className="d-block w-100" src="../../assets/carouselImages/imagen_1.jpg" alt="First slide"/>
        </div>

        <div className="carousel-item">
          <img className="d-block w-100" src="../../assets/carouselImages/imagen_2.jpg" alt="Second slide"/>
        </div>

        <div className="carousel-item">
          <img className="d-block w-100" src="../../assets/carouselImages/imagen_3.jpg" alt="Third slide"/>
          </div>

        <div className="carousel-item">
          <img className="d-block w-100" src="../../assets/carouselImages/imagen_4.jpg" alt="Third slide"/>
        </div>

        <div className="carousel-item">
          <img className="d-block w-100" src="../../assets/carouselImages/imagen_5.jpg" alt="Third slide"/>
        </div>

      </div>

    </div>
    </>
  )
}
