import React, { createContext, useState, useEffect } from "react";
import {
  loginRequest,
  registerRequest,
  verifyTokenRequest,
} from "../api/user.api";

// Se crea el contexto para el usuario
export const AuthContext = createContext();

/**
 * Permite que los estados, variables o métodos definidos sean globales y sean accesados por sus componentes hijos y evitar repetir código o sobrecarga de envío de info.
 * @param {*} children
 * @returns AuthContext.Provider
 */
export const AuthProvider = ({ children }) => {
  /* Estado para gestionar la información del usuario enviada o traída desde el back. Inicializada en vacío. */
  const [user, setUser] = useState(null);

  /* Estado para verificar si un usuario ha iniciado sesión y se encuentra autenticado. 
      Inicializado en false -> No está autenticado */
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  /* Estado para gestionar los errores que se reciben desde el back e imprimirlos en pantalla para el usuario. 
       Inicializado como un arreglo vacío ya que puede recibir múltiples valores */
  const [userErrors, setUserErrors] = useState([]);

  const [loading, setLoading] = useState(true);

  /**
   * Permite el registro de un usuario en el sistema.
   * @param {Object} user
   *
   * Si el registro es exitoso cambia el estado de user e isAuthenticated
   * Si no, cambia el estado de userErrors para mostrarlos visualmente.
   */
  const signUp = async (user) => {
    try {
      const res = await registerRequest(user);
      setUser(res.data);
      if (res.status == 200) {
        return true;
      } else {
        return false;
      }
    } catch (error) {
      setUserErrors(error.response.data.errors);
      return false;
    }
  };

  /**
   * Permite el registro de un usuario en el sistema.
   * @param {Object} user
   *
   * Si el inicio de sesión es exitoso cambia el estado de user e isAuthenticated
   * Si no, cambia el estado de userErrors para mostrarlos visualmente.
   */
  const signIn = async (user) => {
    try {
      const res = await loginRequest(user);
      // localStorage.setItem('user', JSON.stringify(res.data.user))
      localStorage.setItem("token", res.data.token);
      setUser(res.data.user);
      setIsAuthenticated(true);
      console.log(res.data);
    } catch (error) {
      console.log(error);
      setUserErrors(error.response.data.errors);
    }
  };

  const logout = () => {
    // localStorage.removeItem('user')
    localStorage.removeItem("token");
    setIsAuthenticated(false);
    setUser(null);
  };

  useEffect(() => {
    console.log("Check token");
    const checkToken = async () => {
      try {
        const res = await verifyTokenRequest();
        console.log("Check token exists in: ", res.data);
        if (res.data) {
          console.log("Token verificado: ", res.data);
        }
        setIsAuthenticated(true);
      } catch (error) {
        console.log("Error al verificar el token: ", error);
        if (error.response && error.response.status === 401) {
          logout();
        }
      }
    };
    checkToken();
  }, [isAuthenticated, user, logout, verifyTokenRequest]);

  // Este return es para poder exportar el componente que se usará para englobar los componentes que necesiten acceder a la información o métodos especificada.
  return (
    <AuthContext.Provider
      value={{
        signUp,
        signIn,
        logout,
        user,
        isAuthenticated,
        userErrors,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
