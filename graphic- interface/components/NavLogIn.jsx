import React, { useContext, useEffect, useState } from "react"
import { Link, NavLink } from "react-router-dom"
import Logo from '../../assets/Logo_dingo.jpg'
import '../../src/styles.css'
import { AuthContext } from "../../context/AuthContext"
import { ProductContext } from "../../context/ProductContext"

export const NavLogIn = () => {

    const { isAuthenticated, logout, user } = useContext(AuthContext)
    const {
        // filter,
        // getProducts,
        getProductsByCategory,
        getProductsBySubCategory,
        getProductsByParameter
    } = useContext(ProductContext)
    const [searchTerm, setSearchTerm] = useState('')

    // useEffect(() => {
    //     setSearchTerm(filter.value)
    // }, [filter])

    const handleSearchChange = event => {
        setSearchTerm(event.target.value)
    }

    const handleSearch = () => {
        getProductsByParameter(searchTerm)
    }

    const handleKeyPress = event => {
        if (event.key === 'Enter') {
            handleSearch()
        }
    }

    const handleCategoryClick = id => {
        getProductsByCategory(id)
    }

    const handleSubCategoryClick = id => {
        getProductsBySubCategory(id)
    }

    // const handleAllProductsClick = () => {
    //     getProducts()
    // }

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
                    <a className="navButton nav-a dropdown-toggle" href="#"
                        id="navbarDropdown"
                        role="button"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                        onClick={() => handleCategoryClick(1)}
                    >
                        Caninos
                    </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a className="dropdown-item" onClick={() => handleSubCategoryClick(1)}>Alimento</a>
                        <a className="dropdown-item" onClick={() => handleSubCategoryClick(2)}>Snacks</a>
                        <a className="dropdown-item" onClick={() => handleSubCategoryClick(3)}>Accesorios</a>
                    </div>
                </li>
            </ul>
            <ul className="navbar-nav ml-auto">
                <li className="nav-item dropdown">
                    <a className=" navButton nav-a dropdown-toggle"
                        href="#"
                        id="navbarDropdown"
                        role="button"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                        onClick={() => handleCategoryClick(2)}
                    >
                        Felinos
                    </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a className="dropdown-item" onClick={() => handleSubCategoryClick(4)}>Alimento</a>
                    <a className="dropdown-item" onClick={() => handleSubCategoryClick(5)}>Snacks</a>
                    <a className="dropdown-item" onClick={() => handleSubCategoryClick(6)}>Accesorios</a>
                </div>
                </li>
            </ul>
            <ul className="navbar-nav ml-auto">
                <li className="nav-item dropdown"
                onClick={() => handleCategoryClick(3)}>
                    <a className="navButton nav-a dropdown-toggle"
                        href="#"
                        id="navbarDropdown"
                        role="button"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"       
                    >
                        Peces
                    </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a className="dropdown-item" onClick={() => handleSubCategoryClick(7)}>Alimento</a>
                    <a className="dropdown-item" onClick={() => handleSubCategoryClick(8)}>Accesorios peceras</a>
                </div>
                </li>
            </ul>
            </div>
        </div>

        
        <div className="input-group align-items-center ms-5">
                <input type="text" className="form-control"
                    placeholder="Buscar"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                    onChange={() => handleSearchChange}
                    onKeyDown={() => handleKeyPress}
                />

        </div>
        

        <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
            {isAuthenticated ? (
                <>
                    <li>
                        Bienvenido {user && user.name}
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


