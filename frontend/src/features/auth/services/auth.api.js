import axios from "axios"

export async function register({ username, email, password }) {
    const response = await axios.post('http://localhost:3000/api/auth/register', { username, email, password }, {
        withCredentials: true
    })
    return response.data
}

export async function login({ email, password }) {
    const response = await axios.post("http://localhost:3000/api/auth/login", { email, password }, {
        withCredentials: true
    })
    return response.data
}


export async function logout() {
    const response = await axios.get("http://localhost:3000/api/auth/logout", {
        withCredentials: true
    })
    return response.data
}

export async function getMe() {
    const response = await axios.get("http://localhost:3000/api/auth/get-me", {
        withCredentials: true
    })
    return response.data
}

// google oauth 

export async function googleAuth(credential) {
    const response = await axios.post("http://localhost:3000/api/auth/google", credential, {
        withCredentials: true
    })
    return response.data
}