import axios from './axios'

export const registerRequest = user => axios.post(`/users/register`, user)
export const loginRequest = user => axios.post(`/users/login`, user)
export const verifyTokenRequest = () => {
    const token = localStorage.getItem('token')

    if (!token) {
        return Promise.reject(Error("No token provided"))
    }

    const config = {
        headers: {
            Authorization: token
        }
    }
    return axios.get('/users/verify', config)
}