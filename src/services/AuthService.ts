import $api from "../http";
import {AxiosResponse} from 'axios'
import {AuthResponse} from "../models/response/AuthResponse";

export default class AuthService {
    static async login(email: string, password: string): Promise<AxiosResponse<AuthResponse>> {
        return $api.post<{ email: string, password: string }, AxiosResponse<AuthResponse>>('/login', {email, password})
    }

    static async logout(): Promise<void> {
        return $api.post('/logout',)
    }

    static async registration(email: string, password: string): Promise<AxiosResponse<AuthResponse>> {
        return $api.post<{ email: string, password: string }, AxiosResponse<AuthResponse>>('/registration', {email, password})
    }
}
