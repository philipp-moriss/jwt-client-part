import {makeAutoObservable} from "mobx";

import AuthService from "../services/AuthService";
import ErrorService from "../services/ErrorService";

import axios from "axios";
import {API_URL} from "../http";

import {AuthResponse} from "../models/response/AuthResponse";
import {User} from "../models/User/User";

export default class Store {
    user = {} as User
    isAuth = false
    isLoading = false
    errorText = ''

    constructor() {
        makeAutoObservable(this)
    }

    setLoading(bool: boolean) {
        this.isLoading = bool
    }

    setAuth(bool: boolean) {
        this.isAuth = bool
    }

    setUser(user: User) {
        this.user = user
    }

    setError(error: string) {
        this.errorText = error
    }

    async login(email: string, password: string) {
        this.setLoading(true)
        try {
            const {data} = await AuthService.login(email, password)
            localStorage.setItem('token', data.accessToken)
            this.setAuth(true)
            this.setUser(data.user)
        } catch (e) {
            const error = ErrorService.ValidateError(e)
            this.setError(error)
        } finally {
            this.setLoading(false)
        }
    }

    async registration(email: string, password: string) {
        this.setLoading(true)
        try {
            const {data} = await AuthService.registration(email, password)
            localStorage.setItem('token', data.accessToken)
            this.setAuth(true)
            this.setUser(data.user)
        } catch (e) {
            const error = ErrorService.ValidateError(e)
            this.setError(error)
        } finally {
            this.setLoading(false)
        }
    }

    async logout() {
        this.setLoading(true)
        try {
            const response = await AuthService.logout()
            localStorage.removeItem('token')
            this.setAuth(false)
            this.setUser({} as User)
        } catch (e) {
            const error = ErrorService.ValidateError(e)
            this.setError(error)
        } finally {
            this.setLoading(false)
        }
    }

    async checkAuth() {
        this.setLoading(true)
        try {
            const {data} = await axios.get<AuthResponse>(`${API_URL}/refresh`, {
                withCredentials: true,
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            })
            localStorage.setItem('token', data.accessToken)
            this.setAuth(true)
            this.setUser(data.user)
        } catch (e) {
            const error = ErrorService.ValidateError(e)
            this.setError(error)
        } finally {
            this.setLoading(false)
        }
    }
}
