import LogInterceptor from './interceptors/log';
import AccessTokenInterceptor from './interceptors/accessToken';
import UnauthorizeInterceptor from './interceptors/unauthorize';
import {
    BASE_URL, API_SIGNIN_ALEPAY
} from './URL';
import axios from 'axios';

const getInstance = () => {

    const instance = axios.create({
        baseURL: BASE_URL,
        timeout: 30000,
    });

    instance.interceptors.response.use(
        UnauthorizeInterceptor.onFullfilled,
        UnauthorizeInterceptor.onRejected,
    );

    instance.interceptors.request.use(
        LogInterceptor.requestLog,
        LogInterceptor.requestError,
    );

    instance.interceptors.response.use(
        LogInterceptor.responseLog,
        LogInterceptor.responseError,
    );

    instance.interceptors.request.use(
        AccessTokenInterceptor.addAccessToken,
        AccessTokenInterceptor.onRejected
    );

    return instance;
}

const API = { instance: getInstance() };

API.signIn = (body) => {
   
    return API.instance.post(API_SIGNIN_ALEPAY,body);
}
export default API;