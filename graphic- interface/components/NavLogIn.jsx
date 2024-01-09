import React from "react"
import { Link, NavLink } from "react-router-dom"
import Logo from '../../assets/logo_peakU.png'
import '../../src/styles.css'




export const NavLogIn = () => {

  const salir = () => {
    console.log('salir');
  }
  return (
    
    <nav className="navbar navbar-expand-lg navbar-ligth bg-light p-3">
        
      <img
        src= { Logo }
        className='img-fluid img-thumbnail'
        id='logo'
      />

      <div className="navbar-collapse">
        <div className="navbar-nav">

          <NavLink
            className={({isActive}) => `nav-item nav-link ${ isActive ? 'active': '' }`}
            to= 'hombre'
          >
            Hombre
          </NavLink>

          <NavLink
            className={({isActive}) => `nav-item nav-link ${ isActive ? 'active': '' }`}
            to= 'mujer'
          >
            Mujer
          </NavLink>
        </div>
      </div>

      
      <input type="text" placeholder='Buscar' />
      

      <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
        <ul className="navbar-nav ml-auto">

          <span className='nav-item nav-link text-info'>
              example.correo.com
          </span>

        </ul>

              <NavLink
              className={({isActive}) => `nav-item nav-link ${ isActive ? 'active': '' }`}
                  to= 'login'
              >
                  Salir
              </NavLink>
      </div>
    </nav>
  )
}


