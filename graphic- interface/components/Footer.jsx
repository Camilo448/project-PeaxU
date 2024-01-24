import React, { useState } from 'react';
import Logo from '../../assets/Logo_dingo.jpg'
import axios from 'axios';

export const Footer = () => {

    const [email, setEmail] = useState('')

    const handleSuscribe = async () => {
        try {
            await axios.post('http://localhost:4200/api/email', { email })
            console.log('Email enviado con éxito')
        } catch (error) {
            console.error('Error al enviar el correo: ', error.response.data)
        }
    }

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
                          <input type="email" className="form-control" placeholder="Correo electrónico" aria-label="Correo electrónico" aria-describedby="basic-addon2"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}/>
                        <div className="input-group-append">
                              <button className="btn btn-outline-secondary" type="button"
                              onClick={handleSuscribe}>Suscribirse</button>
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



