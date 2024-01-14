import React from "react"
import { AppRouter } from "../router/AppRouter"
import { AuthProvider } from "../context/AuthContext"

React
export const App = () => {
  return (
    <AuthProvider>
      <AppRouter/>
    </AuthProvider>
  )
}


