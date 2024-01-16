import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://localhost:4200/users',
    withCredentials: true
})

export default instance