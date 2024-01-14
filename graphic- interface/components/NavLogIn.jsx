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
            <ul className="navbar-nav ml-auto">
              <li className="nav-item dropdown">
                <a className="navButton nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Caninos
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" href="#">Alimentos</a>
                  <a className="dropdown-item" href="#">Snacks</a>
                  <a className="dropdown-item" href="#">Accesorios</a>
                </div>
              </li>
            </ul>
          </NavLink>

          <NavLink
            className={({isActive}) => `navButton nav-item nav-link ${ isActive ? 'active': '' }`}
            to= 'cats'
          >
           <ul className="navbar-nav ml-auto">
              <li className="nav-item dropdown">
                <a className=" navButton nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Felinos
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" href="#">Alimentos</a>
                  <a className="dropdown-item" href="#">Arenas</a>
                  <a className="dropdown-item" href="#">Accesorios</a>
                </div>
              </li>
            </ul>
          </NavLink>

          <NavLink
            className={({isActive}) => `navButton nav-item nav-link ${ isActive ? 'active': '' }`}
            to= 'fishes'
          >
            <ul className="navbar-nav ml-auto">
              <li className="nav-item dropdown">
                <a className="navButton nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Peces
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" href="#">Alimentos</a>
                  <a className="dropdown-item" href="#">Accesorios peceras</a>
                </div>
              </li>
            </ul>
          </NavLink>

        </div>
      </div>

      
      <div className="input-group align-items-center ms-5">
        <input type="text" className="form-control" placeholder="Buscar" aria-label="Recipient's username" aria-describedby="basic-addon2"/>

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


