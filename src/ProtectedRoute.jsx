import { useContext } from "react"
import { AuthContext } from "../context/AuthContext"
import { Navigate, Outlet } from "react-router"

const ProtectedRoute = () => {
    const { user, isAuthenticated, loading } = useContext(AuthContext)

    if (!loading && !isAuthenticated) return <Navigate to='/login' replace />
    
    return <Outlet/>
}