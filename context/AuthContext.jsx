import React, { createContext, useState } from "react"
import { registerRequest } from "../api/user.api"

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [systemErrors, setSystemErrors] = useState([])

    const signUp = async user => {
        try {
            const res = await registerRequest(user)
            setUser(res.data)
            console.log(user)
        } catch (error) {
            setSystemErrors([error.response.data])
            console.log(systemErrors)
        }
    }

    return (
        <AuthContext.Provider value={{
            signUp,
            user,
            systemErrors
        }}>
            {children}
        </AuthContext.Provider>
    )
}