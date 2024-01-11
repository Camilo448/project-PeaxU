import React from "react"
import { Link, NavLink } from "react-router-dom"
import Logo from '../../assets/Logo_dingo.jpg'
import '../../src/styles.css'




export const NavLogIn = () => {

  return (
    
    <nav className="navLogin navbar navbar-expand-lg navbar-ligth p-3">
      
      <img
        src= { Logo }
        className='img-fluid img-thumbnail ms-3'
        id='logo'
      />

      <div className="navbar-collapse ms-5">
        <div className="navbar-nav">

          <NavLink
            className= {({isActive}) => `navButton nav-item nav-link ${ isActive ? 'active': '' }`}
            to= 'dogs'
          >
            Perros
          </NavLink>

          <NavLink
            className={({isActive}) => `navButton nav-item nav-link ${ isActive ? 'active': '' }`}
            to= 'cats'
          >
            Gatos
          </NavLink>

          <NavLink
            className={({isActive}) => `navButton nav-item nav-link ${ isActive ? 'active': '' }`}
            to= 'fishes'
          >
            Peces
          </NavLink>

        </div>
      </div>

      
      <div class="input-group align-items-center ms-5">
        <input type="text" class="form-control" placeholder="Buscar" aria-label="Recipient's username" aria-describedby="basic-addon2"/>

      </div>
      

      <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
        
        <NavLink 
          to= 'register'
          >
            <button className="navButton btn">Registrate</button>
        </NavLink>

        <NavLink 
          to= 'login'
          >
            <button className="navButton btn">Ingresar</button>
        </NavLink>
        
      </div>
    </nav>
  )
}


