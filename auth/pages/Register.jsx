import React from "react"
import Image from '../../assets/register-image.jpg'
import '../../src/styles.css'

export const Register = () => {
    const colorNav = {
        backgroundColor: 'rgb(243, 219, 142)',
        color: '#402B3A', 
        padding: '15px', 
      }

    return ( 

        <div className="register m-5">
            <div className ="row justify-content-center">
                <div class="col-md-10">
                    <div className="card">
                        <div className=" card-header" style={ colorNav }>
                            <h4 className="text-center">Registrate</h4>
                        </div>
                        <div className="card-body d-flex">
                            <div className="col-md-4 p-3 m-3 ms-5">
                                <img src= { Image } className='img-fluid img-thumbnail'/>
                            </div>
                            <form className="col-md-5 d-flex flex-column justify-content-center align-items-center ms-5">
                                <div className="form-group m-2 w-100">
                                    <h5 className="m-3 mb-5">Ingresa tus datos</h5>
                                    <input type="text" className="form-control m-3" id="user" placeholder="Ingresa tu usuario"/>
                                    <input type="text" className="form-control m-3" id="email" placeholder="Ingresa tu correo"/>
                                    <input type="text" className="form-control m-3" id="password" placeholder="Ingresa una contraseña"/>
                                </div>
                                <div className="form-group m-3 d-flex justify-content-between align-items-center w-100">
                                    <button type="submit" className="btn btn-primary btn-block m-3">Registrarme</button>
                                    <a>Inicia sesion</a>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
  }
  