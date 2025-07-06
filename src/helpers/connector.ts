import axios, {AxiosInstance} from "axios";
import {setAuthInterceptors} from "./authInterceptors";

export class ApiConnector {
    connector: AxiosInstance
    constructor(baseUrl: string) {
        this.connector = axios.create({
            baseURL: baseUrl,
            withCredentials: true
        })
        setAuthInterceptors(this.connector);
    }
}