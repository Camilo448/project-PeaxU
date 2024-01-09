import React from 'react';

import { Navigate, Route, Routes } from 'react-router-dom';
import { Mujer } from '../pages/Mujer';
import { Hombre} from '../pages/Hombre';
import { NavLogIn } from '../graphic- interface/components/NavLogIn';



export const AppRouter = () => {
  return (
    <>
      <NavLogIn/>

      <Routes>
        <Route path="hombre" element={ <Hombre/> } />
        <Route path="mujer" element={ <Mujer/> } />

        <Route path="/" element={ <Navigate to="/mujer" />} />

        
      </Routes>
    </>
  )
}

