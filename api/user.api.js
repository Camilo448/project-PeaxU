import axios from 'axios'

const API = ('http://localhost:4300/api/users')

export const registerRequest = user => axios.post(`${API}/register`, user)