import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { RouterLogin } from '../auth/pages/RouterLogin';
import { Login } from '../auth/pages/Login';
import { Register } from '../auth/pages/Register';
import { DogFood } from '../pages/DogFood';
import { DogSnack } from '../pages/DogSnack';
import { DogAccesory } from '../pages/DogAccesory';
import { CatFood } from '../pages/CatFood';
import { CatSands } from '../pages/CatSands';
import { CatAccesory } from '../pages/CatAccesory';
import { FishFood } from '../pages/FishFood';
import { FishAccesory } from '../pages/FishAccesory';

export const AppRouter = () => {
  return (
    <>

      <Routes>

        <Route path="login" element={ <Login/> } />
        <Route path="register" element={ <Register/> } />
        <Route path="/*" element={ <RouterLogin/>} />
        <Route path="dogfood" element={ <DogFood/> } />
        <Route path="dogsnack" element={ <DogSnack/> } />
        <Route path="dogaccesory" element={ <DogAccesory/> } />
        <Route path="catfood" element={ <CatFood/> } />
        <Route path="catsands" element={ <CatSands/> } />
        <Route path="cataccesory" element={ <CatAccesory/> } />
        <Route path="fishfood" element={ <FishFood/> } />
        <Route path="fishaccesory" element={ <FishAccesory/> } />

      </Routes>
    </>
  )
}



