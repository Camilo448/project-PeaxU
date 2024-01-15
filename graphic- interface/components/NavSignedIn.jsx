import React from "react"
import { Link, NavLink } from "react-router-dom"
import Logo from '../../assets/Logo_dingo.jpg'
import '../../src/styles.css'




export const NavSignedIn = () => {

  return (
    
    <nav className="navLogin navbar navbar-expand-lg navbar-ligth p-3">
      
      <img
        src= { Logo }
        className='img-fluid img-thumbnail ms-3'
        id='logo'
      />

      <div className="navbar-collapse ms-5">
        <div className="navbar-nav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item dropdown">
              <a className="navButton nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Caninos
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link className="dropdown-item" to="dogfood">Alimento</Link>
                <Link className="dropdown-item" to="dogsnack">Snacks</Link>
                <Link className="dropdown-item" to="dogaccesory">Accesorios</Link>
              </div>
            </li>
          </ul>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item dropdown">
              <a className=" navButton nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Felinos
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link className="dropdown-item" to="catfood">Alimento</Link>
                <Link className="dropdown-item" to="catsands">Snacks</Link>
                <Link className="dropdown-item" to="cataccesory">Accesorios</Link>
              </div>
            </li>
          </ul>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item dropdown">
              <a className="navButton nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Peces
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link className="dropdown-item" to="fishfood">Alimento</Link>
                <Link className="dropdown-item" to="fishaccesory">Accesorios peceras</Link>
              </div>
            </li>
          </ul>
        </div>
      </div>

      
      <div className="input-group align-items-center ms-5">
        <input type="text" className="form-control" placeholder="Buscar" aria-label="Recipient's username" aria-describedby="basic-addon2"/>

      </div>
      

      <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 me-5 d-flex flex-column align-items-end">
        
        <div>
            <h5 className="mt-1">Hola Camilo</h5>
        </div>

        <NavLink 
          to= '/welcome'
          >
            <button className="navButton btn">Cerrar sesion</button>
        </NavLink>
        
      </div>
    </nav>
  )
}


