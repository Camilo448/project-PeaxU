import React from 'react';
import { ProductCard } from '../graphic- interface/components/ProductCard';
import { NavLogIn } from '../graphic- interface/components/NavLogIn';
import { Carousel } from '../graphic- interface/components/Carousel';
import { Footer } from '../graphic- interface/components/Footer';

export const CatSands = () => {

  return (
    <div className="catsands">
        <NavLogIn/>
        <Carousel/>
        <h1 className='text-center m-5'>
            Arena para gatos
        </h1>
        <div className="container mt-4">
            <div className="row m-5 d-flex justify-content-between">
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
            </div>
            <div className="row m-5 d-flex justify-content-between">
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
            </div>
        </div> 
        <Footer/> 
    </div>
  )
}



