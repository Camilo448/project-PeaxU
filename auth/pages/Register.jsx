import React from "react"
import Image from '../../assets/register-image.jpg'
import '../../src/styles.css'

export const Register = () => {
    const colorNav = {
        backgroundColor: 'rgb(243, 219, 142)',
        color: '#402B3A', 
        padding: '15px', 
      }

      let handleSubmit = (event) => {
        event.preventDefault();
      }

    let registerPost = () => {
        let name = document.getElementById("name").value;
        let last_name = document.getElementById("last_name").value;
        let email = document.getElementById("email").value;
        let password = document.getElementById("password").value;
        let phone = document.getElementById("phone").value;

        let myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");
            
            let raw = JSON.stringify({
                "name": name,
                "last_name": last_name,
                "email": email,
                "password": password,
                "phone": phone
            });
            
            let requestOptions = {
                method: 'POST',
                headers: myHeaders,
                body: raw,
                redirect: 'follow'
            };
        
            fetch("http://localhost:4200/api/users/register", requestOptions)
                .then(response => response.text())
                .catch(error => console.log('error', error));
    }
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
                            <form onSubmit={handleSubmit} className="col-md-5 d-flex flex-column justify-content-center align-items-center ms-5">
                                <div className="form-group m-2 w-100">
                                    <h5 className="m-3 mb-5">Ingresa tus datos</h5>
                                    <div className="d-flex">
                                        <input type="text" className="form-control m-3 mb-0" id="name" placeholder="Ingresa tu nombre"/> 
                                        <input type="text" className="form-control m-3 mb-0" id="last_name" placeholder="Ingresa tu apellido"/>   
                                    </div>
                                    <input type="text" className="form-control m-3" id="email" placeholder="Ingresa tu correo"/>
                                    <input type="text" className="form-control m-3" id="password" placeholder="Ingresa una contraseña"/>
                                    <input type="text" className="form-control m-3" id="phone" placeholder="Ingresa un telefono"/>
                                </div>
                                <div className="form-group m-3 d-flex justify-content-between align-items-center w-100">
                                    <button onClick={ registerPost } className="btn btn-primary btn-block m-3">Registrarme</button>
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
  