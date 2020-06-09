import axios from 'axios';

class Api {
    public getRecommend(pageNo: number) {
        return axios({
            url: '/api/recommendmenu',
            method: 'GET',
            params: {
                pageNo,
            },
        });
    }
}

export default Api;
