import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../../assets/Logo_dingo.jpg";
import "../../src/styles.css";
import { AuthContext } from "../../context/AuthContext";
import { ProductContext } from "../../context/ProductContext";

export const NavLogIn = () => {
  const [showMenu, setShowMenu] = useState(true);
  const { isAuthenticated, logout, user } = useContext(AuthContext);
  const {
    // filter,
    // getProducts,
    getProductsByCategory,
    getProductsBySubCategory,
    getProductsByParameter,
  } = useContext(ProductContext);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    getProductsByParameter(searchTerm);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  const handleCategoryClick = (id) => {
    getProductsByCategory(id);
  };

  const handleSubCategoryClick = (id) => {
    getProductsBySubCategory(id);
  };

  return (
    <nav className="navLogin navbar navbar-expand-lg navbar-ligth p-3">
      <Link
        to="/welcome"
        className="img-fluid img-thumbnail ms-3"
        onClick={() => setShowMenu(true)}
      >
        <img src={Logo} id="logo" />
      </Link>

      <div className="d-grid gap-4 col-3 mx-auto d-flex justify-content-center">
        {showMenu && (
          <Link to="/products">
            <button
              className="btn btn-primary btn-block"
              
            >
              Explora nuestros productos!
            </button>
          </Link>
        )}

        
      </div>

      <div className="input-group align-items-center ms-3">
        <input
          type="text"
          className="form-control"
          placeholder="Buscar"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          onChange={() => handleSearchChange}
          onKeyDown={() => handleKeyPress}
        />
      </div>

      <div className="navbar-collapse collapse w-100 order-3 dual-collapse d-flex justify-content-end">
        {isAuthenticated ? (
          <>
            <div className="d-flex justify-content-start ms-5 me-5">
              <Link to="/shopping" className="img-fluid img-thumbnail ms-3">
                <img src="../assets/cart-plus.svg" alt="carrito" id="img_car" />
              </Link>
            </div>
            <div className="d-flex justify-content-end align-items-center ms-5">
              <span className="ms-5 me-5">Hola {user && user.name}</span>
              <Link
                to="/"
                onClick={() => {
                  logout();
                }}
                className="navButton btn btn-light me-5"
              >
                Logout
              </Link>
            </div>
          </>
        ) : (
          <>
            <div>
              <NavLink to="register">
                <button className="navButton btn btn-light me-3">
                  Registrate
                </button>
              </NavLink>

              <NavLink to="login">
                <button className="navButton btn btn-light ms-3">
                  Ingresar
                </button>
              </NavLink>
            </div>
          </>
        )}
      </div>
    </nav>
  );
};
