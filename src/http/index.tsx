import axios from 'axios'
import {AuthResponse} from "../models/response/AuthResponse";

export const API_URL = 'https://secret-ravine-46641.herokuapp.com/api'

const $api = axios.create({
    withCredentials: true,
    baseURL: API_URL
})

$api.interceptors.request.use((config) => {
    if (config.headers) {
        config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
    }
    return config
})

$api.interceptors.response.use((config) => {
    return config
}, async (error) => {
    const originConfig = error.config
    if (error.response.status === 401 && error.config && !error.config._isRetry) {
        originConfig._isRetry = true
        try {
            const {data} = await axios.get<AuthResponse>(`${API_URL}/refresh`, {withCredentials: true})
            localStorage.setItem('token', data.accessToken)
            return $api.request(originConfig)
        } catch (e) {
            console.log('НЕ авторизован')
        }
    }
    throw error
})

export default $api
