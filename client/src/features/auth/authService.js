import axios from "axios"

const HOST = 'http://localhost:8080';
const API_URL_REGISTER = `${HOST}/api/auth/register`
const API_URL_LOGIN = `${HOST}/api/auth/login`

const register = async (userData) => {
    const response = await axios.post(API_URL_REGISTER, userData)

    if (response.data) {
        localStorage.setItem('user', JSON.stringify(response.data))
    }

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