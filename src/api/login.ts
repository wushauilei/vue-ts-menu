import axios from 'axios';

class LoginApi {
    /**
     * @function login 登录
     */
    public login(params: any) {
        return axios({
            url: '/user/signIn',
            method: 'post',
            data: params,
        });
    }

    /**
     * @function register 注册
     */
    public register(params: any) {
        return axios({
            url: '/user/register',
            method: 'post',
            data: params,
        });
    }
}

export default LoginApi;
