import React, { useContext, useState } from 'react'
import { CounterApp } from '../graphic- interface/components/CounterApp'
import { ProductContext } from "../context/ProductContext";

export const ItemShoppingCart = ({ name, image, index }) => {
  const { uploadCart, setUploadCart } = useContext(ProductContext);
  const smallImage = {
    height: '70px',
    width: '70px',
  };

  const marginSpanCount = {
    marginLeft: '10px',
    marginRight: '10px',
  };

  const deleteItem = (index) => {
    if (index >= 0 && index < uploadCart.length) {
      const updatedCart = [...uploadCart.slice(0, index), ...uploadCart.slice(index + 1)];
      setUploadCart(updatedCart);
    }
  };

  return (
    <div className='card mt-2'>
      <div className='row align-items-center my-2'>
        <div className='col-1'>
          <img src={image} className='img-fluid' style={smallImage} alt={`Imagen de ${name}`} />
        </div>

        <div className='col-7'>
          <div className='row'>
            <span className='fs-3'>{name}</span>
            <div>
              <button onClick={() => { deleteItem(index) }} className='btn btn-danger mt-2'>Eliminar</button>
            </div>
          </div>
        </div>

        <div className='col-2 d-flex justify-content-center'>
          <CounterApp />
        </div>

        <div className='col-2 d-flex justify-content-center'>
          total
        </div>
      </div>
    </div>
  );
};


