import React from 'react'
import { CounterApp } from '../graphic- interface/components/CounterApp'

export const ItemShoppingCart = ( { name, image, index } ) => {
  const smallImage = {
    height: '70px',
    width: '70px',
  };

  const marginSpanCount = {
    marginLeft: '10px',
    marginRigth: '10px',
  }
  let items = localStorage.getItem("cart");
  let products = JSON.parse(items);

  const deleteItem = (index) => {
    if (index >= 0 && index < products.length) {
      products.splice(index, 1);
      localStorage.setItem('cart', JSON.stringify(products));
      window.location.reload();
    }
  }

  return (
    <div className='card mt-2'>
      <div className='row align-items-center my-2'>

        <div className='col-1'>
          <img src= { image } className='img-fluid' style={ smallImage }/>
        </div>

        <div className='col-7'>
          <div className='row'> 
            <span className='fs-3'>{ name }</span>
            <div>
              <button onClick={() => { deleteItem( index ) }} className='btn btn-danger mt-2'>Eliminar</button>
            </div>
            </div>
          
        </div>

        <div className='col-2 d-flex justify-content-center'>
          <CounterApp/>
        </div>

        <div className='col-2 d-flex justify-content-center'>
          total
        </div>
      </div>


        
    </div>
  )
}


