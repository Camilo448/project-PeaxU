import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { RouterLogin } from '../auth/pages/RouterLogin';
import { Login } from '../auth/pages/Login';
import { Register } from '../auth/pages/Register';



export const AppRouter = () => {
  return (
    <>

      <Routes>

        <Route path="login" element={ <Login/> } />
        <Route path="register" element={ <Register/> } />

        <Route path="/*" element={ <RouterLogin/>} />

      </Routes>
    </>
  )
}



