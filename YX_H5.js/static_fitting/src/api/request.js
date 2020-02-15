import axios from "axios"
import store from '../store'
import router from "../router/index"

const envConfig = {
    production: '',
    stage: '',
    development: 'http://192.168.0.109:8080'
}

export const baseURL = envConfig.production;

let json = {
    timeout: 3000000,
    // baseURL: envConfig.development
}
if (process.env.VUE_APP_URL === 'PROD') {
    json.baseURL = baseURL
}
let HTTP = axios.create(json);
HTTP.defaults.withCredentials = true;

// request拦截器
HTTP.interceptors.request.use(config => {
    return config;
}, error => {
    Promise.reject(error);
})

// response拦截器
HTTP.interceptors.response.use(
    response => {
        return response;
    },
    error => {
        if (error && error.response && error.response.status) {
            if (error.response.status === 401) {
                router.push({
                    path: '/home'
                });
            }
        } else {
            return error;
        }
    }
)
export {
    HTTP
}