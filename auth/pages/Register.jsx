import React, { useContext, useEffect } from "react"
import { useForm } from "react-hook-form"
import Image from '../../assets/register-image.jpg'
import '../../src/styles.css'
import { AuthContext } from "../../context/AuthContext"
import { useNavigate } from "react-router"

export const Register = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()

    // Se importan la información requerida del contexto de usuario desestructurandola y haciendo uso del hook useContext donde se pasa como parámetro el contexto
    const { signUp, userErrors, isAuthenticated } = useContext(AuthContext)

    // Hook para poder enrutar hacia otros componentes en caso de una situación en específico
    const navigate = useNavigate()
    const colorNav = {
        backgroundColor: 'rgb(243, 219, 142)',
        color: '#402B3A', 
        padding: '15px', 
    }

    // Método para realizar el registro
    const onSubmit = handleSubmit(async values => {   
      let result = await signUp(values)
      console.log(result);
      if (result) {
          alert('Ya esta registrado, por favor inicia sesión')
          navigate('/login')
        } else {
            alert('datos incorrectos')
        }
      }
    )

    // Verifica si el usuario se encuentra autenticado, en caso de ser así, redirige al homePage
    useEffect(() => {
        if(isAuthenticated) navigate('/welcome')
    }, [isAuthenticated])

    
        return ( 

        <div className="register m-5">
            <div className ="row justify-content-center">
                <div className="col-md-10">
                    <div className="card">
                        <div className=" card-header" style={ colorNav }>
                            <h4 className="text-center">Registrate</h4>
                        </div>
                        <div className="card-body d-flex">
                            <div className="col-md-4 p-3 m-3 ms-5">
                                <img src= { Image } className='img-fluid img-thumbnail'/>
                            </div>
                            <form className="col-md-5 d-flex flex-column justify-content-center align-items-center ms-5" onSubmit={onSubmit}>
                                {
                                    // Mapea userErrors, el cual es un arreglo, para imprimir los errores que puedan generarse durante la ejecución del registro
                                    userErrors.map((error, i) => (
                                        <div className="p-2" key={i} style={{backgroundColor: '#bf1650'}}>
                                            <span className="text-white">{error.message}</span>
                                        </div>
                                    ))
                                }
                                <div className="form-group m-2 w-100">
                                    <h5 className="m-3 mb-5">Ingresa tus datos</h5>
                                    <div className="d-flex">
                                        <input type="text" className="form-control m-3 mb-0"  placeholder="Ingresa tu nombre"
                                            {...register('name', {
                                                required: true
                                            })}/>
                                        {errors.name && (<p className='text-red-500'>El nombre es obligatorio</p>)}
                                        <input type="text" className="form-control m-3 mb-0" {...register('last_name', {
                                            required: true
                                        })} placeholder="Ingresa tu apellido"/>   
                                    </div>
                                    <input type="text" className="form-control m-3" placeholder="Ingresa tu correo"
                                        {...register('email', {
                                            required: true
                                        })}/>
                                    <input type="text" className="form-control m-3" placeholder="Ingresa una contraseña"
                                        {...register('password', {
                                            required: true
                                        })} />
                                    <input type="text" className="form-control m-3" placeholder="Ingresa un telefono"
                                    {...register('cellphone', {
                                            required: true
                                    })}/>
                                </div>
                                <div className="form-group m-3 d-flex justify-content-between align-items-center w-100">
                                    <button className="btn btn-primary btn-block m-3">Registrarme</button>
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