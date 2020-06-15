import Vue from 'vue';
import router from './router';
import store from './store';

router.beforeEach((to, from, next) => {
    const token = store.state.store;
    if (to.name === 'User') {
        if (!token) {
            store.commit('setNavbarTitle', '登录');
            next('/login');
        }
    }
    next();
});
