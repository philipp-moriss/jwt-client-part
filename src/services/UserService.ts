import $api from "../http";
import {AxiosResponse} from "axios";
import {User} from "../models/User/User";

export default class UserService {
    static async AllUsers () : Promise<AxiosResponse<Array<User>>> {
        return $api.get<Array<User>>('/users')
    }
}
