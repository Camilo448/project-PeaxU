import React from 'react'
import { CounterApp } from '../graphic- interface/components/CounterApp'

export const ItemShoppingCart = () => {
  const smallImage = {
    height: '70px',
    width: '70px',
  };

  const marginSpanCount = {
    marginLeft: '10px',
    marginRigth: '10px',
  }

  return (
    <div className='card mt-2'>
      <div className='row align-items-center my-2'>

        <div className='col-1'>
          <img src= "../assets/example.webp" className='img-fluid' style={ smallImage }/>
        </div>

        <div className='col-7'>
          <div className='row'> 
            <span className='fs-3'>Royal Canin - Yorkshire Terrier Adult</span>
            <div>
              <button className='btn btn-danger mt-2'>Eliminar</button>
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


