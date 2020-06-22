import axios from 'axios';

class UserApi {
    /**
     * @function getUserinfo 获取登录用户信息
     * @param username 用户名
     */
    public getUserinfo(username: any) {
        return axios({
            url: '/user/userinfo',
            method: 'GET',
            params: {
                username,
            },
        });
    }
}

export default UserApi;
