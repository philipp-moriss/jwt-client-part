import axios from "axios";

export default class ErrorService {
    static ValidateError (error : unknown) : string {
        if (axios.isAxiosError(error)){
            return error.response?.data.message
        }else {
            return "'I'm a teapot I don't understand'"
        }
    }
}
