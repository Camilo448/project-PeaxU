import React, { useContext, useEffect } from "react"
import img_login from '../../assets/imagen_login.jpg';
import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../context/AuthContext";


export const Login = () => {
    const { register, handleSubmit, formState: { error } } = useForm()
    const { signIn, userErrors, isAuthenticated } = useContext(AuthContext)
    const navigate = useNavigate()
  const colorNav = {
    backgroundColor: 'rgb(243, 219, 142)', 
    color: '#402B3A', 
    padding: '15px', 
    }

    // Método para realizar el login
    const onSubmit = handleSubmit(async values => {
        signIn(values)
    })
    
    // Verifica si el usuario se encuentra autenticado, en caso de ser así, redirige al homePage
    useEffect(() => {
        if(isAuthenticated) navigate('/welcome')
    }, [isAuthenticated])

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
      <div className="col-md-11">
          <div className="card">

            <div className="card-header" style={ colorNav }>
                <h4 className="text-center">Inicio de Sesión</h4>
            </div>

            <div className="card-body m-3 p-3">
                <div className="row">
                  <div className="col-md-5 text-center">
                  <img src= { img_login } className='img-fluid img-thumbnail'/>
                  </div>
                  <div className="col-md-6">
                        <form onSubmit={onSubmit}>
                            {/* {
                                userErrors.map((error, i) => (
                                    <div className="p-2" key={i} style={{backgroundColor: '#bf1650'}}>
                                        <span className="text-white">{error.message}</span>
                                    </div>
                                ))
                            }        */}
                        <div className="form-group m-4">
                            <label for="email">Usuario:</label>
                                          <input type="text" className="form-control" id="email" placeholder="Ingresa tu usuario"
                                          {...register('email', {
                                                required: true
                                            })}/>
                        </div>

                        <div className="form-group m-4">
                            <label for="password">Contraseña:</label>
                                          <input type="password" className="form-control" placeholder="Ingresa tu contraseña"
                                            {...register('password', {
                                                required: true
                                            })}/>
                        </div>
                        <div className="d-flex justify-content-between align-items-center mt-5" >
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