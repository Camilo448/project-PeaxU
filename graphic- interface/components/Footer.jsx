import React from 'react';
import Logo from '../../assets/Logo_dingo.jpg'

export const Footer = () => {

  return (
    <footer>
        <div className="container mt-5">
            <div className="row p-4">
                <div className="col-md-4 d-flex justify-content-center">
                    <img src={ Logo } alt="Logo" className="img-fluid col-md-5 mx-auto"/>
                </div>
                <div className="col-md-4 d-flex flex-column">
                    <h4 className="welcome__text mb-4">Contacto</h4>
                    <p className="welcome__text">Telefono: 3101231231</p>
                    <p className="welcome__text">dingo_shop@example.com</p>
                    <p className="welcome__text">@dingo_shop</p>
                </div>
                <div className="col-md-4 d-flex justify-content-center align-items-center flex-column">
                    <h5 className="welcome__text mb-5">Suscríbete</h5>
                    <div className="input-group mb-3">
                        <input type="email" className="form-control" placeholder="Correo electrónico" aria-label="Correo electrónico" aria-describedby="basic-addon2"/>
                        <div className="input-group-append">
                            <button className="btn btn-outline-secondary" type="button">Suscribirse</button>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
            <div className="row mt-3">
                <div className="col-md-12 text-center">
                    <p className="welcome__text">© 2024 Tu Empresa. Todos los derechos reservados.</p>
                </div>
            </div>
        </div>
    </footer>
  )
}



