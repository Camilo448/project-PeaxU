import React, { useContext } from "react"
import { Link, NavLink } from "react-router-dom"
import Logo from '../../assets/Logo_dingo.jpg'
import '../../src/styles.css'
import { AuthContext } from "../../context/AuthContext"

export const NavLogIn = () => {

    const { isAuthenticated, logout, user } = useContext(AuthContext)

    return (
        
        <nav className="navLogin navbar navbar-expand-lg navbar-ligth p-3">
        
        <Link to="/welcome" className='img-fluid img-thumbnail ms-3'><img
            src= { Logo }
            
            id='logo'
        /></Link>
        
        <div className="navbar-collapse ms-5">
            <div className="navbar-nav">

            <ul className="navbar-nav ml-auto align-items-center">
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
                    <Link className="dropdown-item" to="/cats">Alimento</Link>
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
        

        <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
            {isAuthenticated ? (
                <>
                    <li>
                        Bienvenido {user.name}
                    </li>
                    <li>
                        <Link to='/' onClick={() => {
                            logout()
                        }} className="navButton btn">Logout</Link>
                    </li>    
                </>
                )
                : (
                    <>
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
                    </>
                )}
            
        </div>
        </nav>
    )
}


