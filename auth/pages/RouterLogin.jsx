import React from 'react'
import { NavLogIn } from '../../graphic- interface/components/NavLogIn'
import { Dogs } from '../../pages/Dogs';
import { Cats } from '../../pages/Cats';
import { Navigate, Route, Routes } from 'react-router';
import { Carousel } from '../../graphic- interface/components/Carousel';
import { Welcome } from '../../pages/Welcome'
//import { Carro2 } from '../../graphic- interface/components/Carro2';


export const RouterLogin = () => {
    return (
    <>
        <NavLogIn/>
        <Carousel/>
        <Welcome/>

        <Routes>

            <Route path="dogs" element={ <Dogs/> } />
            <Route path="cats" element={ <Cats/> } />

            <Route path="/" element={ <Navigate to="/welcome" />} />

        </Routes>
    </>
    )
}


