import React from "react"
import Logo from '../../assets/logo_peakU.png'
import '../../src/styles.css'

export const Register = () => {

    return (
      
        <div className="register">
            <nav className="navbar navbar-expand-lg navbar-primary bg-warning p-3">
                <img src={Logo} className='img-fluid img-thumbnail' id='logo' />
            </nav>
            <div className="d-flex flex-column justify-content-center align-items-center">
            
                <div className='register__title'>
                    <h2>Hola! registrate para iniciar</h2>
                </div>

                <div className='register__data-register d-flex flex-column mt-3'>
                    <input className="m-2" type="nombreUsuario" placeholder='Nombre de usuario' id='name'/>
                    <input className="m-2" type="correo" placeholder='Correo Electrónico' id='email' />
                    <input className="m-2" type="contraseña" placeholder='Contraseña' id='pass' />
                </div>

                <button className="btn btn-secondary m-3">Registrate</button>

                <div className='register__container'>

                    <div className='register__link--text m-2'>
                        <h4>¿Ya tienes una cuenta?</h4>
                    </div>

                    <div className='register__link--color d-flex align-self-end'>
                        <a href="link-login">Login</a>
                    </div>

                </div>

            </div>
        </div>
    )
  }
  