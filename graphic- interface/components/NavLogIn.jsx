import React from "react"
import { Link, NavLink } from "react-router-dom"
import Logo from '../../assets/Logo_dingo.jpg'
import '../../src/styles.css'




export const NavLogIn = () => {

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
            to= 'dogs'
          >
            Perros
          </NavLink>

          <NavLink
            className={({isActive}) => `nav-item nav-link ${ isActive ? 'active': '' }`}
            to= 'cats'
          >
            Gatos
          </NavLink>

          <NavLink
            className={({isActive}) => `nav-item nav-link ${ isActive ? 'active': '' }`}
            to= 'fishes'
          >
            Peces
          </NavLink>

        </div>
      </div>

      
      <input type="text" placeholder='Buscar' className="ml-2"/>
      

      <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
        
        <NavLink 
          to= 'register'
          >
            <button className="btn">Registrate</button>
        </NavLink>

        <NavLink 
          to= 'login'
          >
            <button className="btn">Ingresar</button>
        </NavLink>
        
      </div>
    </nav>
  )
}


