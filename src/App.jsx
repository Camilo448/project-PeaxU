import React from "react"
import { AppRouter } from "../router/AppRouter"
import { AuthProvider } from "../context/AuthContext"
//import { DogFood } from "../pages/DogFood"


React
export const App = () => {
  return (
    <AuthProvider>
      <AppRouter/>
    </AuthProvider>
  )
}


