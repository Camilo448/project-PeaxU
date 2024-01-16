import React, { createContext, useState, useEffect } from "react"
import { loginRequest, registerRequest, verifyTokenRequest } from "../api/user.api"
import Cookies from "js-cookie"

// Se crea el contexto para el usuario
export const AuthContext = createContext()

/**
 * Permite que los estados, variables o métodos definidos sean globales y sean accesados por sus componentes hijos y evitar repetir código o sobrecarga de envío de info.
 * @param {*} children
 * @returns AuthContext.Provider
 */
export const AuthProvider = ({ children }) => {

    /* Estado para gestionar la información del usuario enviada o traída desde el back. Inicializada en vacío. */
    const [user, setUser] = useState(null)

    /* Estado para verificar si un usuario ha iniciado sesión y se encuentra autenticado. 
      Inicializado en false -> No está autenticado */
    const [isAuthenticated, setIsAuthenticated] = useState(false)

    /* Estado para gestionar los errores que se reciben desde el back e imprimirlos en pantalla para el usuario. 
       Inicializado como un arreglo vacío ya que puede recibir múltiples valores */
    const [userErrors, setUserErrors] = useState([])

    const [loading, setLoading] = useState(true)

    /**
     * Permite el registro de un usuario en el sistema.
     * @param {Object} user 
     * 
     * Si el registro es exitoso cambia el estado de user e isAuthenticated
     * Si no, cambia el estado de userErrors para mostrarlos visualmente.
     */
    const signUp = async user => {
        try {
            const res = await registerRequest(user)
            setUser(res.data)
            setIsAuthenticated(true)
        } catch (error) {
            console.log(error)
            setUserErrors(error.response.data.errors)
        }
    }

    /**
     * Permite el registro de un usuario en el sistema.
     * @param {Object} user 
     * 
     * Si el inicio de sesión es exitoso cambia el estado de user e isAuthenticated
     * Si no, cambia el estado de userErrors para mostrarlos visualmente.
     */
    const signIn = async user => {
        try {
            const res = await loginRequest(user)
            setUser(res.data)
            setIsAuthenticated(true)
        } catch (error) {
            setUserErrors(error.response.data.errors)
        }
    }

    useEffect(() => {
        const checkLogin = async () => {
            const cookies = Cookies.get()

            if (!cookies.token) {
                setIsAuthenticated(false)
                return setUser(null)
                setLoading(false)
            }
                
            try {
                const res = await verifyTokenRequest(cookies.token)
                if (!res.data) {
                    setIsAuthenticated(false)
                    setLoading(false)
                    return
                }
                if (!res.data) setIsAuthenticated(false)
                
                setIsAuthenticated(true)
                setUser(res.data)
                setLoading(false)
            } catch (error) {
                console.log(error)
                setIsAuthenticated(false)
                setUser(null)
                setLoading(false)
            }
        }
        checkLogin()
    }, [])

    // Este return es para poder exportar el componente que se usará para englobar los componentes que necesiten acceder a la información o métodos especificada.
    return (
        <AuthContext.Provider value={{
            signUp,
            signIn,
            user,
            isAuthenticated,
            userErrors
        }}>
            {children}
        </AuthContext.Provider>
    )
}