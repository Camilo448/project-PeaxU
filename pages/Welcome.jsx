import React, { useContext, useEffect } from "react"
import { Footer } from "../graphic- interface/components/Footer"
import Logo from '../assets/Logo_dingo.jpg'
import Bone from '../assets/boneIcon.png'
import Delivery from '../assets/deliveryIcon.jpg'
import Payment from '../assets/payIcon.png'
import Chunky from '../assets/brands/chunky-logo.jpg'
import Hill from '../assets/brands/hills-logo.png'
import Kirkland from '../assets/brands/kirkland-logo.png'
import Monello from '../assets/brands/monello-logo.png'
import Nutranuggets from '../assets/brands/nutranuggets-logo.jpg'
import Pedigree from '../assets/brands/pedigree-logo.png'
import Purina from '../assets/brands/purina-logo.png'
import Royal from '../assets/brands/royalcanin-logo.png'
import Taste from '../assets/brands/taste-logo.jpg'
import Vetlife from '../assets/brands/vetlife-logo.jpg'
import { AuthContext } from "../context/AuthContext"
import { Navigate } from "react-router"
import Cookies from "js-cookie"
import { Link } from "react-router-dom"

export const Welcome = () => {

    return (
        <div className="welcome mt-4">
            <div className="row justify-content-center ms-5">
                <h3 className="welcome__container--title text-center m-4 mt-5">Encuentra todo lo que necesitas para tu mascota</h3>
                <div className="row d-flex m-4 mb-5 justify-content-center">
                    <div className="welcome__container--card card col-3 m-4 p-2">
                        <div className="card-body">
                            <div className="col-md-3 m-3 mx-auto">
                                <img src= { Delivery } className='img-fluid img-thumbnail'/>   
                            </div>
                            <div className="d-flex justify-content-center mt-4">
                                <h5 className="text-center">Realiza tu pedido desde la comodidad de tu hogar</h5>
                            </div>
                            <div className="d-flex justify-content-center mt-4">
                                <h6 className="text-center">Lo que necesites a tu domicilio</h6>
                            </div>
                        </div>
                    </div>
                    <div className="welcome__container--card card col-3 m-4 p-2">
                        <div className="card-body ">
                            <div className="col-md-3 m-3 mx-auto">
                                <img src= { Payment } className='img-fluid img-thumbnail'/>
                            </div>
                            <div className="d-flex justify-content-center mt-4">
                                <h5 className="text-center">Envios totalmente seguros y confiables</h5>
                            </div>
                            <div className="d-flex justify-content-center mt-4">
                                <h6 className="text-center">Varias formas de pago</h6>
                            </div>
                        </div>
                    </div>
                    <div className="welcome__container--card card col-3 m-4 p-2">
                        <div className="card-body">
                            <div className="col-md-3 m-3 mx-auto">
                                <img src= { Bone } className='img-fluid img-thumbnail'/>
                            </div>
                            <div className="d-flex justify-content-center mt-4">
                                <h5 className="text-center">Variedad de productos en diferentes marcas</h5>
                            </div>
                            <div className="d-flex justify-content-center mt-4">
                                <h6 className="text-center">Diferentes accesorios y juguetes</h6>
                            </div>
                        </div>
                    </div>
                    <Link to="/products">
                        <button className="btn btn-primary btn-block" >
                            Explora nuestros productos!
                        </button>
                    </Link>
                </div>
                <hr/>
                <div className="row d-flex m-4 justify-content-center">
                    <h3 className="welcome__container--title text-center m-4 mt-5">Marcas registradas</h3>
                    <div className="welcome__container--brand card col-10 m-4">
                        <div className="card-body">
                            <table className="table">
                                <tbody>
                                    <tr>
                                        <td><img src= { Chunky } className='brandImage img-thumbnail m-2'/></td>
                                        <td><img src= { Hill } className='brandImage img-thumbnail m-2'/></td>
                                        <td><img src= { Kirkland } className='brandImage img-thumbnail m-2'/></td>
                                        <td><img src= { Monello } className='brandImage img-thumbnail m-2'/></td>
                                        <td><img src= { Nutranuggets } className='brandImage img-thumbnail m-2'/></td>
                                    </tr>
                                    <tr>
                                        <td><img src= { Pedigree } className='brandImage img-thumbnail m-2'/></td>
                                        <td><img src= { Purina } className='brandImage img-thumbnail m-2'/></td>
                                        <td><img src= { Royal } className='brandImage img-thumbnail m-2'/></td>
                                        <td><img src= { Taste } className='brandImage img-thumbnail m-2'/></td>
                                        <td><img src= { Vetlife } className='brandImage img-thumbnail m-2'/></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>   
    )
}


