import axios from "axios"
import { HOST_URL } from "../../data/data"

const API_URL_REGISTER = `${HOST_URL}/api/auth/register`
const API_URL_LOGIN = `${HOST_URL}/api/auth/login`

const register = async (userData) => {
    const response = await axios.post(API_URL_REGISTER, userData)

    // if (response.data) {
    //     localStorage.setItem('user', JSON.stringify(response.data))
    // }

    return response.data;
}

const login = async (userData) => {
    const response = await axios.post(API_URL_LOGIN, userData)

    if (response.data) {
        localStorage.setItem('user', JSON.stringify(response.data))
    }

    return response.data;
}

const logout = async () => {
    localStorage.removeItem('user')
}

const authService = {
    register,
    logout,
    login
}

export default authService;