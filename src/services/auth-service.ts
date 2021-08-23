import axios from 'axios'
import Cookies from 'js-cookie'
import { API_URL, auth } from '../constants'

const cookieOptions = {
    // Delete the cookie after 3 days
    expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
    httpOnly: true
}

export const login = (login: string, password: string) => {
    return axios
        .post(API_URL + auth, {
            login,
            password,
            type: 'web'
        })
        .then((response) => {
            if (response.data.accessToken) {
                Cookies.set(
                    '__auth',
                    JSON.stringify(response.data.accessToken),
                    cookieOptions
                )
            }
            return response.data
        })
}

export const getSession = () => {
    const jwt = Cookies.get('__auth')
    let session: any
    try {
        if (jwt) {
            const base64Url = jwt.split('.')[1]
            const base64 = base64Url.replace('-', '+').replace('_', '/')
            // https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/atob
            session = JSON.parse(window.atob(base64))
        }
    } catch (error) {
        console.log(error)
    }

    return session
}

export const logout = () => {
    Cookies.remove('__auth')
}
