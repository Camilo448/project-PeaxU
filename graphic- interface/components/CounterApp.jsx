
import React, { useState } from 'react';

export const CounterApp = () => {

  const [ counter, setCounter ] = useState(1);

  const sum = () => {
    //setCounter ( counter + 1 );
    setCounter( (c) => c + 1 );
  }
  
  const rest = () => {
  (counter != 1 )?setCounter ( (c) => c - 1 ): setCounter(counter) ;
  }

  return (
    <div className='row col-md-8 text-center align-items-center'>
        
      <button onClick={ rest } className='col-4 btn btn-outline-warning'> - </button>
      <p className='col-4 fs-6 mt-2'> { counter } </p>
      <button onClick={ sum } className='col-4 btn btn-outline-warning'> + </button>
        
    </div>
  )
}



