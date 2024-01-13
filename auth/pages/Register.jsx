import React, { useState } from "react"
import { useForm } from "react-hook-form"
import Image from '../../assets/register-image.jpg'
import '../../src/styles.css'
import { registerRequest } from "../../api/user.api"

export const Register = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const [user, setUser] = useState({
        name: '',
        last_name: ''
    })
    const [systemErrors, setSystemErrors] = useState([])

    const colorNav = {
        backgroundColor: 'rgb(243, 219, 142)',
        color: '#402B3A', 
        padding: '15px', 
    }

    const onSubmit = handleSubmit(async e => {
        e.preventDefault()

        try {
            const res = await registerRequest(user)
            setUser(res.data)
        } catch (error) {
            setSystemErrors(error.response.data)
        }
    }
    )

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
                            {
                                systemErrors.map((error, i) => {
                                    <div className="bg-red-500 p-2 text-white" key={i}>
                                        {error}
                                    </div>
                                })
                            }
                            <form className="col-md-5 d-flex flex-column justify-content-center align-items-center ms-5" onSubmit={onSubmit}>
                                <div className="form-group m-2 w-100">
                                    <h5 className="m-3 mb-5">Ingresa tus datos</h5>
                                    <div className="d-flex">
                                        <input type="text" className="form-control m-3 mb-0"  placeholder="Ingresa tu nombre"
                                            {...register('name', {
                                                required: true
                                            })}
                                            value={user.name} />
                                        {errors.name && (<p className='text-red-500'>El nombre es obligatorio</p>)}
                                        <input type="text" className="form-control m-3 mb-0" {...register('last_name', {
                                            required: true
                                        })} placeholder="Ingresa tu apellido"
                                            value={user.last_name} />   
                                    </div>
                                    <input type="text" className="form-control m-3" placeholder="Ingresa tu correo"
                                        {...register('email', {
                                            required: true
                                        })}
                                        value={user.email} />
                                    <input type="text" className="form-control m-3" placeholder="Ingresa una contraseña"
                                        {...register('password', {
                                            required: true
                                        })}
                                        value={user.password} />
                                    <input type="text" className="form-control m-3" placeholder="Ingresa un telefono"
                                    {...register('cellphone', {
                                            required: true
                                    })}
                                    value={user.cellphone}/>
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
  