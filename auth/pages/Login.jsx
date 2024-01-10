import React from "react"
import  image_login  from '../../assets/image_login.jpg'


export const Login = () => {
  const colorNav = {
    backgroundColor: '#F8E559', 
    color: '#402B3A', 
    padding: '15px', 
  }

  return (
    <div className="container mt-5">
      <div class="row justify-content-center">
      <div class="col-md-11">
          <div className="card">

            <div class="card-header" style={ colorNav }>
                <h4 className="text-center">Inicio de Sesión</h4>
            </div>

            <div className="card-body m-4 p-3">
                <div className="row">
                  <div className="col-md-6 text-center">
                  <img src= { image_login } className='img-fluid img-thumbnail'/>
                  </div>
                  <div className="col-md-6">
                      <form>

                        <div className="form-group m-4">
                            <label for="usuario">Usuario:</label>
                            <input type="text" className="form-control" id="usuario" placeholder="Ingresa tu usuario"/>
                        </div>

                        <div className="form-group m-4">
                            <label for="contrasena">Contraseña:</label>
                            <input type="password" className="form-control" id="contrasena" placeholder="Ingresa tu contraseña"/>
                        </div>
                        <div className="d-flex justify-content-between align-items-center">
                          <button type="submit" className="btn btn-primary btn-block m-4">Iniciar Sesión</button>
                          <span>Olvide mi contraseña</span>
                        </div>
                        

                      </form>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}