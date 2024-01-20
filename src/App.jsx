import React from "react"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"

// import { AppRouter } from "../router/AppRouter"
import { AuthProvider } from "../context/AuthContext"
import { NavLogIn } from "../graphic- interface/components/NavLogIn"
import { Welcome } from "../pages/Welcome"
import { Login } from "../auth/pages/Login"
import { Register } from "../auth/pages/Register"
import { Carousel } from "../graphic- interface/components/Carousel"
import { CatFood } from "../pages/CatFood"
import { Footer } from "../graphic- interface/components/Footer"
//import { DogFood } from "../pages/DogFood"


React
export const App = () => {
    return (
        <AuthProvider>
            <BrowserRouter>
                <NavLogIn />
                <Carousel />
                <Routes>
                    <Route path="/" element={<Navigate to="/welcome" />} />
                    <Route path="/welcome" element={<Welcome />} />
                    <Route path="/login" element={<Login /> } />
                    <Route path="/register" element={<Register />} />
                    <Route path="/cats" element={<CatFood />} />
                    <Route path="" />
                    <Route path="" />
                    <Route path="" />
                    <Route path="" />
                </Routes>
                <Footer/>
            </BrowserRouter>
        </AuthProvider>
    )
}


