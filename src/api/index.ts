import axios from 'axios';

class Api {
    /**
     * @function getRecommend 获取推荐菜谱列表
     */
    public getRecommend(pageNo: number) {
        return axios({
            url: '/api/recommendmenu',
            method: 'GET',
            params: {
                pageNo,
            },
        });
    }

    /**
     * @function getMenuDetail 获取菜谱详情
     */
    public getMenuDetail(id: number) {
        return axios({
            url: '/api/menuDetail',
            method: 'GET',
            params: {
                id,
            },
        });
    }

    /**
     * @function getFirstlevelmenu 获取一级目录
     */
    public getFirstlevelmenu() {
        return axios({
            url: '/api/firstlevelmenu',
            method: 'GET',
        });
    }

    /**
     * @function getSecondarymenu 获取二级目录
     */
    public getSecondarymenu(parentId: number) {
        return axios({
            url: '/api/secondarymenu',
            method: 'GET',
            params: {
                parentId,
            },
        });
    }

    /**
     * @function getThreelevelcatalog 获取三级目录
     */
    public getThreelevelcatalog(secondaryId: number, pageNo: number) {
        return axios({
            url: '/api/threelevelcatalog',
            method: 'GET',
            params: {
                secondaryId,
                pageNo,
            },
        });
    }
}

export default Api;
