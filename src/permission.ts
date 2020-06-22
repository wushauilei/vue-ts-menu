import Vue from 'vue';
import router from './router';
import store from './store';

router.beforeEach((to: any, from: any, next: any) => {
    store.commit('setTabbarActive', to.name);
    const token = store.state.token || localStorage.getItem('token');
    store.commit('setToken', token);
    if (to.name === 'User') {
        if (!token) {
            store.commit('setNavbarTitle', '登录');
            next('/login');
        }
    }
    next();
});
